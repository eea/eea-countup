import React, { useState, useEffect } from 'react';

function Countup({
  end,
  duration,
  decimals,
  prefix = '',
  suffix = '',
  children = <></>,
}) {
  const [counter, setCounter] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    let start = 0;
    let increment = 1;
    if (decimals > 0) {
      increment /= Math.pow(10, decimals);
    }
    if (Math.abs(start - end) <= increment / 10) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime =
      (totalMilSecDur / Math.abs(end * Math.pow(10, decimals || 0))) * 1000;
    let timer = setInterval(() => {
      if (!paused) {
        if (start < end) start += increment;
        else start -= increment;
        setCounter(start.toFixed(decimals));
        if (Math.abs(start - end) <= increment / 10) clearInterval(timer);
      }
    }, incrementTime);
    return () => clearInterval(timer);
  }, [duration, end, decimals]);
  const pauseResume = () => {
    setPaused(!paused);
  };
  const start = () => {
    setPaused(false);
  };
  const reset = () => {
    setPaused(true);
    setCounter(0);
  };

  return {
    pauseResume,
    start,
    reset,
    Countup: () => {
      return (
        <div>
          {prefix}
          {counter}
          {suffix} {children}
        </div>
      );
    },
  };
}

export default Countup;
