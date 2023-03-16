import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h2>항해99 14기 TimeCapsule</h2>
      <div>
        <Link to="/LetterEditor">편지쓰러 가기</Link>
      </div>
      <div>
        <Link to="/CheeringMessage">항해 선원들에게 응원글 남기기</Link>
      </div>

    </div >)
}

export default Home;