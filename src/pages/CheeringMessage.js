import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';

const CheeringMessage = () => {

  const nicknameInput = useRef()
  const contentInput = useRef()


  const [state, setState] = useState({
    nickname: "",
    content: ""
  })

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    if (state.nickname.length < 1) {
      nicknameInput.current.focus();
      return;
    }
    if (state.content.length < 3) {
      contentInput.current.focus();
      return;
    }

    alert("저장성공!")

    setState({
      nickname: "",
      content: ""
    })
    fetch('https://hanghae-capsule-backend.fly.dev/api/v1/cheering-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //json형식으로 보내겠다는 의미
      },
      body: JSON.stringify({
        //실제 정보
        "nickname": state.nickname,
        "content": state.content
      })
    })
      .then(response => {
        // 성공적으로 응답을 받았을 때 실행할 코드
        console.log(response.json())
      })
      .catch(error => {
        console.log('응원글 전송 실패')
      });

    window.location.reload()

  }

  return (
    <div className="CheeringMessage">
      <MyHeader
        headText={"항해 선원들에게 응원글을 남겨주세요"}
        leftChild={
          <Link to="/">
            <MyButton text={'뒤로가기'} onClick={() => { }} />
          </Link>}
      />
      <div className="CheeringMessageDiv">
        <div className="CheeringMessagenickname">
          <label
            htmlFor="nickname">작성자</label>
          <input
            placeholder="응원하는 공간이니 사칭은 삼가하여 주세요."
            id='nickname'
            ref={nicknameInput}
            name="nickname"
            value={state.nickname}
            onChange={handleChangeState} />
        </div>
        <div className="CheeringMessageContent">
          <label htmlFor="content">내용</label>
          <textarea
            placeholder="힘나는 응원글을 3글자이상 적어주세요."
            id='content'
            ref={contentInput}
            name="content"
            value={state.content}
            onChange={handleChangeState} />
        </div>
      </div>
      <button onClick={handleSubmit}>응원글 저장하기
      </button>
    </div>

  )
}

export default CheeringMessage