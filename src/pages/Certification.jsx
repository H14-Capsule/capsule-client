import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';
import Timer from "../components/Timer";
import React from 'react';
import Countdown from 'react-countdown';


const Certification = () => {

  const [isVisible, setIsVisible] = useState(true)
  const [timerActive, setTimerActive] = useState(false);
  const [text, setText] = useState("")
  const [number, setNumber] = useState("")
  const [isTimeOver, setIsTimeOver] = useState(false);


  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    localStorage.setItem('email', text);
    setTimerActive(true);
  };


  const handleClick = () => {

    alert("안녕")
    isTimeOver(false)
  }

  return (
    <>
      <MyHeader
        headText={"이메일 인증"}
        rightChild={
          <Link to="/CheeringMessage">
            <MyButton text={'응원글 쓰러 가기'} onClick={() => { }} />
          </Link>}
          
        leftChild={
          <Link to="/LetterEditor">
            <MyButton 
            className={isVisible ? "visible" : "hidden"}text={'편지 수정 하기'} onClick={() => { }} />
          </Link>}

        />
      <div className="Certification">
        <div>
          해당 이메일은 편지를 받을 이메일입니다.
        </div>
        <div className="Certification_button">
          <input
            value={text} onChange={(e) => { setText(e.target.value) }}
            placeholder="이메일을 적어주세요." />
          <button className={isVisible ? "visible" : "hidden"} onClick={toggleVisibility}> 인증번호 전송
          </button>

          <button className={isVisible ? "hidden" : "visible"}>재 전 송</button>
        </div>
          
        <div className="Certification_button">
          <div className={isVisible ? "hidden" : "visible"}>
            <div>
              
            </div>
            {timerActive && <Timer initialTime={10} setIsTimeOver={setIsTimeOver}/>}
            <input
              value={number} onChange={(e) => { setNumber(e.target.value) }}
              placeholder="인증번호를 적어주세요." />
            <button 
            disabled={isTimeOver} 
            onClick={handleClick}>인증 완료</button>
          </div>
        </div>
      </div>
    </>)
}

export default Certification