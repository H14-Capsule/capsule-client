import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const LetterEditor = () => {
  const navigate = useNavigate();

  const [text, setText] = useState("\n")

  const currentDate = () => {
    const date = new Date();
    return date.toLocaleDateString()
  }

  return (
    <div>
      <div>{currentDate()}
        <div className="Letter">
          <textarea value={text} onChange={(e) => {
            setText(e.target.value)
          }} className="LetterText" />
        </div>
      </div>
    </div>
  )
}

export default LetterEditor;