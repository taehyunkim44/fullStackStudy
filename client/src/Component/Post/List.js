import React from 'react';
import { Link } from 'react-router-dom';
import { ListDiv, ListItem } from '../../Style/ListCSS';
import Avatar from 'react-avatar';

import moment from 'moment';
import 'moment/locale/ko';

function List(props) {
  const SetTime = (a, b) => {
    if (a !== b) {
      return moment(b).format('YYYY년 MMMM Do, hh:mm') + '(수정됨)';
    } else {
      return moment(a).format('YYYY년 MMMM Do, hh:mm');
    }
  };

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

  return (
    <ListDiv>
      {/* <h1>List!</h1> */}
      {/* <h3>{Text}</h3> */}
      {props.PostList.map((post, idx) => {
        return (
          <ListItem key={idx}>
            <Link to={`post/${post.postNum}`}>
              <p className="title">{post.title}</p>
              <div className="author">
                <div>
                  <Avatar
                    size="40"
                    round={true}
                    src={post.author.photoURL}
                    style={{ border: '1px solid #c6c6c6' }}
                  />
                  <p className="auth">{post.author.displayName}</p>
                </div>
                <p className="time">
                  {SetTime(post.createdAt, post.updatedAt)}
                </p>
              </div>
              <p>{post.content}</p>
            </Link>
          </ListItem>
        );
      })}
    </ListDiv>
  );
}

export default List;
