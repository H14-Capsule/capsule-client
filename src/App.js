import { useEffect, useState } from 'react';

import './App.css';
import LetterEditor from './pages/LetterEditor';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import CheeringMessage from './pages/CheeringMessage';
import Certification from './pages/Certification';
import CheeringMessageList from './pages/CheeringMessageList'
import Finish from './pages/Finish'
import CheeringMessagePage from './pages/CheeringMessagePage';




function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 경로가 /일때 element는 Home이다 라는 의미 */}
          <Route path='/LetterEditor' element={<LetterEditor />} />
          <Route path='/CheeringMessage' element={
            <>
              <CheeringMessagePage />
            </>} />
          <Route path='/Finish' element={<Finish />} />
          <Route path='/Certification' element={<Certification />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
