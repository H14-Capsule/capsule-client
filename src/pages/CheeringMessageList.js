import { useEffect, useState } from "react";

const CheeringMessageList = () => {
  const [cheeringMessages, setCheeringMessages] = useState([]);

  useEffect(() => {
    fetch('https://hanghae-capsule-backend.fly.dev/api/v1/cheering-message')
      .then(response => response.json())
      .then(data => {
        // 요청이 성공적으로 완료되었을 때 처리할 로직
        setCheeringMessages(data);
        console.log(data)
      })
      .catch(error => {
        // 요청이 실패했을 때 처리할 로직
        console.log('실패')
      });
  }, [])


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