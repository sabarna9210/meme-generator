import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import "bootstrap/dist/css/bootstrap.min.css";
import EditPage from './pages/Edit';
function App() {
  return (
    <>
      <div>
        <h1>MEME GENERATOR</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/edit" element={<EditPage/>}/>
      </Routes>
    </>
  );
}

export default App;
