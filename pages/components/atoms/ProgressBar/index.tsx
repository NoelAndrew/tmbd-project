import React, { useEffect, useRef } from 'react';

const ProgressBar = ({ value }: any) => {
  const progressBarRef = useRef(null);

  useEffect(() => {
    const progressBar: null = progressBarRef.current;
    const circle = progressBar.querySelector('.progress-bar-circle');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;
  }, [value]);

  return (
    <div className="progress-bar" ref={progressBarRef}>
      <svg className="progress-bar-svg">
        <circle className="progress-bar-circle" cx="50%" cy="50%" r="40%" />
      </svg>
      <div className="progress-bar-text">{value}%</div>
    </div>
  );
};

export default ProgressBar;