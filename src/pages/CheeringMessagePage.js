import { useEffect, useState } from "react";
import CheeringMessage from "./CheeringMessage"
import CheeringMessageList from "./CheeringMessageList"

const CheeringMessagePage = () => {
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
    <>
      <CheeringMessage setCheeringMessages={setCheeringMessages} />
      <CheeringMessageList cheeringMessages={cheeringMessages} />
    </>
  )
}

export default CheeringMessagePage
