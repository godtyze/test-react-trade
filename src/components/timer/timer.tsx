import React, {useEffect, useState} from 'react';
import {getPaddedTime} from "../../utils";
import './timer.css';

const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(600);

  const hours = getPaddedTime(Math.floor(timeLeft / (60 * 60)));
  const minutes = getPaddedTime(Math.floor(timeLeft / 60));
  const seconds = getPaddedTime(timeLeft - (Math.floor(timeLeft / 60) * 60));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime >= 1 ? prevTime - 1 : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='timer'>
      <span>{hours}</span>
      <span>:</span>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </div>
  );
};

export default Timer;