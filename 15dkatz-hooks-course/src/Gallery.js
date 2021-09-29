import React, { useState } from 'react';
import PICTURES from './data/pictures';
import { useDynamicTransition } from './hooks';

const SECONDS = 1000;

function Gallery() {
  const [delay, setDelay] = useState(3 * SECONDS);
  const [increment, setIncrement] = useState(1);

  const index = useDynamicTransition({
    delay,
    increment,
    picsLength: PICTURES.length,
  });

  const updateDelay = (event) => {
    const numValue = Number(event.target.value);
    numValue > 0 && setDelay(numValue * SECONDS);
  };

  const updateIncrement = (event) => {
    const newIncr = Number(event.target.value);
    newIncr > 0 && setIncrement(newIncr);
  };

  return (
    <div className='Gallery'>
      <img src={PICTURES[index].image} alt='gallery' />
      <div className='multiform'>
        <div>
          Gallery transition delay (seconds)
          <input type='number' value={delay / SECONDS} onChange={updateDelay} />
        </div>
        <div>
          Gallery transition Increment (min 1):{' '}
          <input type='number' value={increment} onChange={updateIncrement} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
