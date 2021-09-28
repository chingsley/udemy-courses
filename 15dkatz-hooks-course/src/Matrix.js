import React, { useState, useEffect } from 'react';
import MATRIX_FRAMES from './data/matrix';

const SECONDS = 1000;
const minimumDelay = 0.01 * SECONDS; // 10 milliseconds;
const minimumIncrement = 1;

function Matrix() {
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(500);
  const [increment, setIncrement] = useState(1);

  const updateDelay = (event) => {
    const inputDelay = Number(event.target.value) * SECONDS;
    setDelay(inputDelay < minimumDelay ? minimumDelay : inputDelay);
  };

  const updateIncrement = (event) => {
    const inputIncrement = Number(event.target.value);
    setIncrement(
      inputIncrement < minimumIncrement ? minimumIncrement : inputIncrement
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(
        (storedIndex) => (storedIndex + increment) % MATRIX_FRAMES.length
      );
    }, delay);

    return () => clearInterval(interval);
  }, [delay, increment]);
  return (
    <div className='Matrix'>
      <img src={MATRIX_FRAMES[index]} alt='matrix-animarion' />
      <div className='multiform'>
        <div>
          Frame transition delay (seconds)
          <input type='number' value={delay / SECONDS} onChange={updateDelay} />
        </div>
        <div>
          Frame Increment
          <input type='number' value={increment} onChange={updateIncrement} />
        </div>
      </div>
    </div>
  );
}

export default Matrix;
