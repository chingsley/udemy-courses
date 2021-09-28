import { useState, useEffect } from 'react';

export const useFetch = (url, initialValue) => {
  const [result, setResult] = useState(initialValue);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        // console.log('make the call...');
        return response.json();
      })
      .then((json) => {
        return setResult(json);
      })
      .catch((error) => {
        // console.log({ error });
      });
  }, []);

  return result;
};

export const useDynamicTransition = ({ delay, increment, picsLength }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((storedIndex) => (storedIndex + increment) % picsLength);
    }, delay);

    return () => clearInterval(interval);
  }, [delay, increment]);

  return index;
};
