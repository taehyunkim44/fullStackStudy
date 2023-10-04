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

app.listen(port, () => {
  mongoose
    .connect(
      `mongodb+srv://eiiyy1112:${mongoDBPw}@cluster0.tr99tyl.mongodb.net/?retryWrites=true&w=majority`
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

app.post('/api/test', (req, res) => {
  console.log(req.body);
  res.status(200).json({ success: true, text: '안녕하세요' });
});
