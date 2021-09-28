import React, { useState, useEffect } from 'react';
import PICTURES from './data/pictures';
console.log('PICTURES.length: ', PICTURES.length);

const SECONDS = 1000;

function Gallery() {
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(3 * SECONDS);
  const [increment, setIncrement] = useState(1);

  const updateDelay = (event) => {
    const numValue = Number(event.target.value);
    numValue > 0 && setDelay(numValue * SECONDS);
  };

  const updateIncrement = (event) => {
    const newIncr = Number(event.target.value);
    newIncr > 0 && setIncrement(newIncr);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        return (prevIndex + increment) % PICTURES.length;
      });
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [delay, increment]);

  console.log('PICTURES[index]: ', PICTURES[index]);

  return (
    <div className='Gallery'>
      <img src={PICTURES[index].image} alt='gallery' />
      <div className='multiform'>
        <div>
          Gallery transition delay (seconds) Delay:{' '}
          <input type='number' value={delay / SECONDS} onChange={updateDelay} />{' '}
          Increment
          <input type='number' value={increment} onChange={updateIncrement} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
