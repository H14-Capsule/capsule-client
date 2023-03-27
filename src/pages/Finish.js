import { Link } from "react-router-dom";
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';

const Finish = () => {
  return (
    <>
      <MyHeader
        headText={"인증완료"}
        rightChild={
          <Link to="/CheeringMessage">
            <MyButton text={'응원글 쓰러 가기'} onClick={() => { }} />
          </Link>}
      />
      <div>
        인증이 완료되었습니다. 해당 편지는 7월 7일에 인증받은 이메일로 발송됩니다. <br />앞으로 남은 항해기간 응원 합니다. 화이팅!!!!
      </div>
    </>)
}

export default Finish