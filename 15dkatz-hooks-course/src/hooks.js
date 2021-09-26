import { useState, useEffect } from 'react';

export const useFetch = (url, initialValue) => {
  const [result, setResult] = useState(initialValue);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return setResult(json);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);

  return result;
};
