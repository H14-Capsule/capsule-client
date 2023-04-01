import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h2>항해99 14기  TimeCapsule</h2>
      <div>
        편지쓰러 가기
        <Link to="/LetterEditor">
          <button className="button">go</button>
        </Link>
      </div>
      <div>
        항해 동료들에게 응원글 남기기
        <Link to="/CheeringMessage">
          <button className="button">go</button>
        </Link>
      </div>
      <span className="creator">클라이언트 제작자 : 최유리  / 서버 제작자 : 김경록 / 자문 : 고규식  / 아이디어 제공 : 이도영</span>
    </div >)
}

export default Home;