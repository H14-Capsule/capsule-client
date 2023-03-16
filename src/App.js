
import './App.css';
import LetterEditor from './pages/LetterEditor';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import CheeringMessage from './pages/CheeringMessage';


//COMPONENTS
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={"App"}
          leftChild={
            <MyButton text={'왼쪽버튼'} onClick={() => alert("왼쪽클릭")} />}
          rightChild={
            <MyButton text={'오른쪽버튼'} onClick={() => alert("오른쪽클릭")} />}
        />

        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼클릭")}
          type={"positive"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼클릭")}
          type={"negative"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼클릭")}
          type={"default"}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 경로가 /일때 element는 Home이다 라는 의미 */}
          <Route path='/LetterEditor' element={<LetterEditor />} />
          <Route path='/CheeringMessage' element={<CheeringMessage />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
