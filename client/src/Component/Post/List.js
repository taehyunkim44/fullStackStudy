import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListDiv, ListItem } from '../../Style/ListCSS';

function List(props) {
  // const [Text, setText] = useState('');

  // useEffect(() => {
  //   let body = {
  //     text: 'Hello',
  //   };
  //   axios
  //     .post('/api/test', body)
  //     .then((response) => {
  //       console.log(response);
  //       setText(response.data.text);
  //     })
  //     .catch((error) => {
  //       alert('요청 실패');
  //       console.log(error);
  //     });
  // }, []);

  const [PostList, setPostList] = useState([]);

  useEffect(() => {
    axios
      .post('/api/post/list')
      .then((response) => {
        if (response.data.success) {
          setPostList([...response.data.postList]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ListDiv>
      {/* <h1>List!</h1> */}
      {/* <h3>{Text}</h3> */}
      {PostList.map((post, idx) => {
        return (
          <ListItem>
            <p className="title">{post.title}</p>
            <p>{post.content}</p>
            <hr />
          </ListItem>
        );
      })}
    </ListDiv>
  );
}

export default List;
