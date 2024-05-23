// src/CounterBox.js
import React, { useEffect, useState } from 'react';


const CounterBox = ({ icon, end, text, isColored }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 4000; // 4 seconds
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className={`counter-box ${isColored ? 'colored' : ''}`}>
      <i className={`fa ${icon}`}></i>
      <span className="counter">{count}</span>
      <p>{text}</p>
    </div>
  );
};

export default CounterBox;
