import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';

const CheeringMessage = ({ onCreate }) => {

  const authorInput = useRef()
  const contentInput = useRef()


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
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 3) {
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content)
    alert("저장성공!")

    setState({
      author: "",
      content: ""
    })
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
        <div className="CheeringMessageAuthor">
          <label
            htmlFor="author">작성자</label>
          <input
            placeholder="응원하는 공간이니 사칭은 삼가하여 주세요."
            id='author'
            ref={authorInput}
            name="author"
            value={state.author}
            onChange={handleChangeState} />
        </div>
        <div className="CheeringMessageContent">
          <label htmlFor="content">내용</label>
          <textarea
            placeholder="힘나는 응원글을 짧게라도 적어주세요."
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