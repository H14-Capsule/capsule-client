import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';

const CheeringMessage = () => {



  return (
    <>
      <MyHeader
        headText={"항해 선원들에게 응원글을 남겨주세요"}
        leftChild={
          <Link to="/">
            <MyButton text={'뒤로가기'} onClick={() => { }} />
          </Link>}
      />
      <div>
        <textarea />

      </div>

    </>
  )
}

export default CheeringMessage