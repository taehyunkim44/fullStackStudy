import React, { useState } from 'react';
import Test from './Test';
import Heading from './Component/Heading';
import List from './Component/List';
import Upload from './Component/Upload';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [ContentList, setContentList] = useState([]);

  return (
    <>
      <Heading />
      <Routes>
        <Route
          path="/list"
          element={
            <List ContentList={ContentList} setContentList={setContentList} />
          }
        />
        <Route
          path="/upload"
          element={
            <Upload ContentList={ContentList} setContentList={setContentList} />
          }
        />
      </Routes>
    </>
  );
}

export default App;