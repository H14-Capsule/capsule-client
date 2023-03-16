import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';

const Certification = () => {

  const [isVisible, setIsVisible] = useState(true)

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const [text, setText] = useState("")
  const [number, setNumber] = useState("")


  return (
    <>
      <MyHeader
        headText={"이메일 인증"}
      />
      <div className="Certification">
        <div className="Certification_button">
          <input
            value={text} onChange={(e) => { setText(e.target.value) }}
            placeholder="메일받을 이메일을 적어주세요." />
          <button className={isVisible ? "visible" : "hidden"} onClick={toggleVisibility}> 인증번호 전송
          </button>

          <button className={isVisible ? "hidden" : "visible"}>재 전 송</button>
        </div>

        <div className="Certification_button">
          <div className={isVisible ? "hidden" : "visible"}>
            <input
              value={number} onChange={(e) => { setNumber(e.target.value) }}
              placeholder="인증번호를 적어주세요." />
            <button>인증 완료</button>
          </div>
        </div>
      </div>
    </>)
}

export default Certification