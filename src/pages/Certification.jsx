import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';
import Timer from "../components/Timer";
import React from 'react';



const Certification = () => {

  const textInput = useRef()

  const [isVisible, setIsVisible] = useState(true)
  const [timerActive, setTimerActive] = useState(false);
  const [text, setText] = useState("")
  const [number, setNumber] = useState("")
  const [isTimeOver, setIsTimeOver] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const [id,setId] = useState(null)
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    // 타이머 시작 시간을 기록
    if (timerActive) {
      setStartTime(Date.now());
    }
  }, [timerActive]);

  const toggleVisibility = () => {
    if(text.length<5){
      textInput.current.focus();
      return;
    }

    setIsVisible(!isVisible);
    localStorage.setItem('email', text);
    setTimerActive(true);

    fetch('https://hanghae-capsule-backend.fly.dev/api/v1/author', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      //json형식으로 보내겠다는 의미
    },
    body: JSON.stringify({
      //실제 정보
      email: text
    })
  })
  .then((response) => response.json())
  .then((data) => {
    // 성공적으로 응답을 받았을 때 실행할 코드
    console.log('이메일 전송 성공')
    setId(data.id);
  })
  .catch(error => {
    console.log('이메일 전송 실패')
  });

  };



  const toggleTimer = () => {
    if (startTime && (Date.now() - startTime) > 60000){
    setTimerKey(timerKey + 1);
    setStartTime(Date.now())
    //key값이 달라져서 렌더링되버려서 타이머가 초기화 되는방식
    setIsTimeOver(false);
    setTimerActive(true);
    fetch(`https://hanghae-capsule-backend.fly.dev/api/v1/author/${id}/issue-auth-key`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      //json형식으로 보내겠다는 의미
    },
  })
  .then((response) => {
    // 성공적으로 응답을 받았을 때 실행할 코드
    console.log('이메일 재발송 성공')
  })
  .catch(error => {
    console.log('이메일 발송 실패')
  });
}else{
  alert("1분 후 재발송 가능합니다.")
}
  };

  const handleClick = () => {

    alert("안녕")
    isTimeOver(false)
  }

  return (
    <>
      <MyHeader
        headText={"이메일 인증"}
        // rightChild={
        //   <Link to="/CheeringMessage">
        //     <MyButton text={'응원글 쓰러 가기'} onClick={() => { }} />
        //   </Link>}
          
        leftChild={
          <Link to="/LetterEditor">
            <MyButton text={'편지 수정 하기'} onClick={() => { }} />
          </Link>}

        />
      <div className="Certification">
        <div>
          해당 이메일은 편지를 받을 이메일입니다.
        </div>
        <div className="Certification_button">
          <input
            ref={textInput}
            value={text} onChange={(e) => { setText(e.target.value) }}
            placeholder="이메일을 적어주세요." />
          <button className={isVisible ? "visible" : "hidden"} onClick={toggleVisibility}> 인증번호 발송
          </button>

          <button 
          className={isVisible ? "hidden" : "visible"}
          onClick={toggleTimer}>재 발 송</button>
        </div>
          
        <div className="Certification_button">
          <div className={isVisible ? "hidden" : "visible"}>
            <div>
              
            </div>
            {timerActive && <Timer key={timerKey} 
            initialTime={180} setIsTimeOver={setIsTimeOver}/>}
            <input
              value={number} onChange={(e) => { setNumber(e.target.value) }}
              placeholder="인증번호를 적어주세요." />
            <button 
            disabled={isTimeOver} 
            onClick={handleClick}>인증 완료</button>
          </div>
        </div>
      </div>
      <div>
        인증이 완료되었습니다. 해당 편지는 7월 7일에 인증받은 이메일로 발송됩니다. <br/>앞으로 남은 항해기간 응원 합니다. 화이팅! 
      </div>
    </>)
}

export default Certification