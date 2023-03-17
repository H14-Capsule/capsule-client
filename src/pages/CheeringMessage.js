import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';

const CheeringMessage = () => {

  const [state, setState] = useState({
    author: "",
    content: ""
  })

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    console.log(state)
    alert("저장 성공!")
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
      <div>
        <input
          name="author"
          value={state.author}
          onChange={handleChangeState} />
      </div>
      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={handleChangeState} />
      </div>
      <div>
        <button onClick={handleSubmit}>응원글 저장하기</button>
      </div>
    </div>
  )
}

export default CheeringMessage