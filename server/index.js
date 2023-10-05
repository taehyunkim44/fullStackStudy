const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = 4000;
require('dotenv').config();

const mongoDBPw = process.env.MongoDB_PassWord;

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Post } = require('./Model/Post.js');
const { Counter } = require('./Model/Counter.js');

app.listen(port, () => {
  mongoose
    .connect(
      `mongodb+srv://eiiyy1112:${mongoDBPw}@cluster0.tr99tyl.mongodb.net/Community?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log(`Example app listening on port ${port}`);
      console.log('Connecting MongoDB...');
    })
    .catch((err) => {
      console.log(`${err}`);
    });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.post('/api/post/submit', (req, res) => {
  let temp = req.body;
  Counter.findOne({ name: 'counter' })
    .exec()
    .then((counter) => {
      temp.postNum = counter.postNum;
      const CommunityPost = new Post(temp);
      CommunityPost.save().then(() => {
        Counter.updateOne({ name: 'counter' }, { $inc: { postNum: 1 } }).then(
          () => {
            res.status(200).json({ success: true });
          }
        );
      });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

app.post('/api/post/list', (req, res) => {
  Post.find()
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, postList: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

/*
1. Post MongoDB Model
2. Client css (Bootstrap, Emotion)
*/
