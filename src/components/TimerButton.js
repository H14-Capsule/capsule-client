import React, { useState, useEffect } from 'react';
import Certification from '../pages/Certification';

const TimerButton = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDisabled(true);
    }, 180000); // 3분

    return () => clearTimeout(timer);
  }, []);

  return (
    <button disabled={isDisabled}>인증완료</button>
  );
}

export default TimerButton;