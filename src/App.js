import { useEffect, useState } from 'react';

import './App.css';
import LetterEditor from './pages/LetterEditor';
import { BrowserRouter, HashRouter, Route, Switch, Routes } from 'react-router-dom'
import Home from './pages/Home';
import CheeringMessage from './pages/CheeringMessage';
import Certification from './pages/Certification';
import CheeringMessageList from './pages/CheeringMessageList'
import Finish from './pages/Finish'
import CheeringMessagePage from './pages/CheeringMessagePage';




function App() {


  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* 경로가 /일때 element는 Home이다 라는 의미 */}
          <Route exact path='/LetterEditor' element={<LetterEditor />} />
          <Route exact path='/CheeringMessage' element={
            <>
              <CheeringMessagePage />
            </>} />
          <Route exact path='/Finish' element={<Finish />} />
          <Route exact path='/Certification' element={<Certification />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
