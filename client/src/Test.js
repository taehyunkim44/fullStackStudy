import React, { useState } from 'react';

/*
1. 컴포넌트의 이름은 반드시 영어 대문자로 시작하여야 합니다.
2. 컴포넌트는 다른 컴포넌트가 사용할 수 있도록 export 해주어야 합니다.
3. 컴포넌트가 다른 컴포넌트를 사용하려면 import 하여야 합니다.

JSX
1. CamelCase 원칙: className
2. js : {}
3. css,style : {{}} + object
*/
// function Test() {
//   const [Temp, setTemp] = useState(0);
//   /*
//   1. 첫번째 인자: 변수의 이름
//   2. 두번째 인자: State를 바꿔주는 함수
//   3. useState 함수 인자: State의 초기 Type, 값

//   state의 값이 바뀌어도 화면을 재랜더링(새로고침)시킬 필요가 x

//   1. state의 값을 바꿀때는 항상 setState 사용!
//   2. setState를 html 태그의 on 속성 호출: function(){}
//   */
//   return (
//     <div>
//       <h1 className="test">Test 컴포넌트입니다!</h1>
//       {Temp}
//       <button onClick={() => setTemp(Temp + 1)}> 증가</button>
//     </div>
//   );
// }

// export default Test;

// number state

// function Test() {
//   const [Temp, setTemp] = useState([]);
//   const [Number, setNumber] = useState(0);

//   return (
//     <div>
//       <h1 className="test">Test 컴포넌트입니다!</h1>
//       {Temp.map((element, idx) => {
//         return <p key={idx}>{element}</p>;
//       })}
//       <button
//         onClick={() => {
//           let arr = [];
//           arr = [...Temp];
//           arr.push(Number);
//           setNumber(Number + 1);
//           setTemp([...arr]);
//         }}
//       >
//         {' '}
//         증가
//       </button>
//     </div>
//   );
// }

// export default Test;

// boolean state

// function Test() {
//   const [Temp, setTemp] = useState(false);

//   return (
//     <div>
//       {/*
//     Temp의 값이 참이면 h1 tag 보여주고,
//     Temp의 값이 거짓이면 h1 tag 숨겨주는 역할
//     btn 클릭할때마다 Temp의 값이 !
//     */}

//       {Temp ? <h1 className="test">Test 컴포넌트입니다!</h1> : null}

//       <button
//         onClick={() => {
//           setTemp(!Temp);
//         }}
//       >
//         {' '}
//         {Temp ? "숨기기" : "보기"}
//       </button>
//     </div>
//   );
// }

// export default Test;

function Test() {
  const [Content, setContent] = useState('');
  const [ContentList, setContentList] = useState([]);

  const onSubmit = () => {
    let tempArr = [...ContentList];
    tempArr.push(Content);
    setContentList([...tempArr]);
    setContent('');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      {ContentList.map((content, idx) => {
        return (
          <div
            key={idx}
            style={{
              width: '100%',
              marginLeft: '1rem',
            }}
          >
            내용 : {content}
          </div>
        );
      })}

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

export default Test;
