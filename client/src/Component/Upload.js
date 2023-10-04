import React, { useState, useEffect } from 'react';

function Upload(props) {
  const [Content, setContent] = useState('');

  const onSubmit = () => {
    let tempArr = [...props.ContentList];
    tempArr.push(Content);
    props.setContentList([...tempArr]);
    setContent('');
  };

  useEffect(
    () => {
      // 컴포넌트가 나타날 때 실행될 코드
      // alert('Upload 컴포넌트가 나타났습니다!');
      return () => {
        // 컴포넌트가 죽을 때 실행될 코드
        // alert('Upload 컴포넌트가 죽었습니다!');
      };
    },
    [
      /*useEffect가 실행될 조건 */
      //Content
    ]
  );

  return (
    <div>
      <input
        type="text"
        value={Content}
        onChange={(event) => {
          setContent(event.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          onSubmit();
        }}
        style={{ marginTop: '1rem' }}
      >
        제출!
      </button>
    </div>
  );
}

export default Upload;
