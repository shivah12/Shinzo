// AnalogClock.jsx
import React, { useState, useEffect } from 'react';
import './AnalogClock.css';

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = ((minutes * 60 + seconds) / 3600) * 360;
  const hourDegrees = ((hours % 12) * 3600 + minutes * 60 + seconds) / 43200 * 360;

  return (
    <div className="analog-clock">
      <div className="hand second-hand" style={{ transform: `rotate(${secondDegrees}deg)` }} />
      <div className="hand minute-hand" style={{ transform: `rotate(${minuteDegrees}deg)` }} />
      <div className="hand hour-hand" style={{ transform: `rotate(${hourDegrees}deg)` }} />
      <div className="center-circle" />
    </div>
  );
};

export default AnalogClock;
