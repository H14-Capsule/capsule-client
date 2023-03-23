import { useEffect, useRef, useState } from 'react';

import './App.css';
import LetterEditor from './pages/LetterEditor';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import CheeringMessage from './pages/CheeringMessage';
import Certification from './pages/Certification';
import CheeringMessageList from './pages/CheeringMessageList.js'


const dummyData = [
  {
    author: "항해99",
    content: "지치지않게 화이팅!",
  },
  {
    author: "유리최",
    content: "건강챙기면서 화이팅!",
  },

]


function App() {

  useEffect(() => {
    const item1 = localStorage.getItem('item1')
    const item2 = localStorage.getItem('item2')
    const item3 = JSON.parse(localStorage.getItem('item3'))
    console.log({ item1, item2, item3 })
  }, [])

  const [data, setData] = useState([])


  const onCreate = (author, content) => {
    //author,content 을 파라미터로 받아온다.
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,

    }

    setData([newItem, ...data])
  }

  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 경로가 /일때 element는 Home이다 라는 의미 */}
          <Route path='/LetterEditor' element={<LetterEditor />} />
          <Route path='/CheeringMessage' element={
            <>
              <CheeringMessage onCreate={onCreate} />
              <CheeringMessageList dummyData={dummyData} />
            </>} />
          <Route path='/Certification' element={<Certification />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
