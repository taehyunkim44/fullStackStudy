import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RepleContent from './RepleContent.js';

import { RepleListDiv } from '../../Style/RepleCSS.js';

function RepleList(props) {
  const [repleList, setrepleList] = useState([]);

  useEffect(() => {
    let body = {
      postId: props.postId,
    };
    axios.post('/api/reple/getReple', body).then((res) => {
      if (res.data.success) {
        setrepleList([...res.data.repleList]);
      }
    });
  }, []);

  return (
    <div>
      <RepleListDiv>
        {repleList.map((reple, idx) => {
          return <RepleContent reple={reple} key={idx} />;
        })}
      </RepleListDiv>
    </div>
  );
}

export default RepleList;
