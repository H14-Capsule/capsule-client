import { useRef } from 'react';

import './App.css';
import LetterEditor from './pages/LetterEditor';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import CheeringMessage from './pages/CheeringMessage';
import Certification from './pages/Certification';


const dummData = [
  {
    id: 1,
    content: "방명록 1",
    date: 1679011111523
  },
  {
    id: 2,
    content: "방명록 2",
    date: 1679011111524
  },
  {
    id: 3,
    content: "방명록 3",
    date: 1679011111525
  },
  {
    id: 4,
    content: "방명록 4",
    date: 1679011111526
  }
]

function App() {

  const dataId = useRef(0)

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 경로가 /일때 element는 Home이다 라는 의미 */}
          <Route path='/LetterEditor' element={<LetterEditor />} />
          <Route path='/CheeringMessage' element={<CheeringMessage />} />
          <Route path='/Certification' element={<Certification />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
