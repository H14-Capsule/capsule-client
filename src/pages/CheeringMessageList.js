import { useEffect, useState } from "react";

const CheeringMessageList = ({ cheeringMessages }) => {



  return (
    <div className="CheeringMessageList">
      <h2>응원글 리스트</h2>
      <div>
        {cheeringMessages.map((it, idx) => (
          <div className="list" key={idx}>
            <div className="listAuthor">작성자 : {it.nickname}</div>
            <div>응원글 : {it.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default CheeringMessageList