import React, { useState, useEffect } from 'react';
import PICTURES from './data/pictures';
console.log('PICTURES.length: ', PICTURES.length);

function Gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        return (prevIndex + 1) % PICTURES.length;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log('index: ', index);

  return (
    <div className='Gallery'>
      <img src={PICTURES[index].image} alt='gallery' />
    </div>
  );
}

export default Gallery;
