import React, { useState, useEffect } from 'react';
import Certification from '../pages/Certification';

const Timer = ({ initialTime, setIsTimeOver }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);



  const tick = () => {
    setTimeLeft((timeLeft) => {
      if (timeLeft - 1 <= 0) {
        setIsTimeOver(true);
        return 0;
      } else {
        return timeLeft - 1;
      }
    });
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      tick();
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;



  return (
    <div>
      <p>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</p>
    </div>
  );
};

export default Timer;