import { useEffect, useState } from 'react';

const Timer = () => {
  const calculateTimeLeft = () => {
    const year = new Date().getFullYear();
    const difference = +new Date(`${year}-02-20`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div className='expire-timer__numbers'>
        <div className='num-cell'>{timeLeft[interval]}</div>
        <div className='dotted-cell'>:</div>
      </div>
    );
  });

  return (
    <>
      <div className='expire-timer'>
        <div className='timer-group'>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</div>
      </div>
    </>
  );
};

export default Timer;
