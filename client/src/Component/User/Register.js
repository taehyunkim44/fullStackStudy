import React, { useState } from 'react';
import { LoginDiv } from '../../Style/UserCSS';

function Register() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Pw, setPw] = useState('');
  const [PwConfirm, setPwConfirm] = useState('');

  return (
    <LoginDiv>
      <form>
        <label>이름</label>
        <input
          type="name"
          value={Name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <label>이메일</label>
        <input
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <label>비밀번호</label>
        <input
          type="password"
          value={Pw}
          onChange={(e) => setPw(e.currentTarget.value)}
        />
        <label>비밀번호확인</label>
        <input
          type="password"
          value={PwConfirm}
          onChange={(e) => setPwConfirm(e.currentTarget.value)}
        />
        <button>회원가입</button>
      </form>
    </LoginDiv>
  );
}

export default Register;
