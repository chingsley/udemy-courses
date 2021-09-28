import React, { useState } from 'react';
import MATRIX_FRAMES from './data/matrix';
import { useDynamicTransition } from './hooks';

const SECONDS = 1000;
const minimumDelay = 0.01 * SECONDS; // 10 milliseconds;
const minimumIncrement = 1;

function Matrix() {
  const [delay, setDelay] = useState(50);
  const [increment, setIncrement] = useState(1);

  const index = useDynamicTransition({
    delay,
    increment,
    picsLength: MATRIX_FRAMES.length,
  });

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
