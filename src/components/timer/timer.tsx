import React, {useEffect} from 'react';
import {getPaddedTime} from "../../utils";
import './timer.css';
import store from "../../store/store";
import {observer} from "mobx-react-lite";

const Timer: React.FC = () => {
  const hours = getPaddedTime(Math.floor(store.timeLeft / (60 * 60)));
  const minutes = getPaddedTime(Math.floor(store.timeLeft / 60));
  const seconds = getPaddedTime(store.timeLeft - (Math.floor(store.timeLeft / 60) * 60));

  useEffect(() => {
    const interval = setInterval(() => {
      if (store.timeLeft >= 1) {
        store.decrementTime();
      } else {
        store.changeTurnStatus();
        store.setTimeLeft(120);
      }
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

export default observer(Timer);