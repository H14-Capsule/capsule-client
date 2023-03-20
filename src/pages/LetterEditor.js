import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';

const LetterEditor = () => {


  useEffect(() => {
    const letter = localStorage.getItem('letter')
    if (letter !== null) {
      setText(letter)
    }
  }, [])

  const [text, setText] = useState("\n")

  const currentDate = () => {
    const date = new Date();
    return date.toLocaleDateString()
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      localStorage.setItem('letter', text)
    }, 1000)
    return () => {
      clearInterval(intervalId);
    }
  }, [text])

  const handleSaveClick = () => {
    localStorage.setItem('letter', text);
  };

  return (
    <>
      <MyHeader
        headText={"항해가 끝난 나에게 쓰는 편지"}
        leftChild={
          <Link to="/">
            <MyButton text={'뒤로가기'} onClick={() => { }} />
          </Link>}

        rightChild={
          <Link to="/Certification">
            <MyButton text={'저장하기'} onClick={handleSaveClick} />
          </Link>}
      />

      <div>
        <div className="LetterEditorStorage">
          {currentDate()}
        </div>
        <div>
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