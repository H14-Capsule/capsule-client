import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';

const LetterEditor = () => {


  const navigate = useNavigate();

  const [text, setText] = useState("\n")

  const currentDate = () => {
    const date = new Date();
    return date.toLocaleDateString()
  }

  return (
    <>
      <MyHeader
        headText={"항해을 끝 맞췄을 나에게 편지 쓰기"}
        leftChild={
          <Link to="/">
            <MyButton text={'뒤로가기'} onClick={() => { }} />
          </Link>}

        rightChild={
          <Link to="/Certification">
            <MyButton text={'저장하기'} onClick={() => { }} />
          </Link>}
      />

      <div>
        <div>{currentDate()}
          <div className="Letter">
            <textarea value={text} onChange={(e) => {
              setText(e.target.value)
            }} className="LetterText" />
          </div>
        </div>
      </div>
    </>
  )
}

export default LetterEditor;