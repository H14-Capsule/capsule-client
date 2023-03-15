import { useState } from "react";


const Letter = () => {

  const [data, setData] = useState("")


  return <div className="Letter">
    <textarea className="LetterText" />
  </div>
}

export default Letter;