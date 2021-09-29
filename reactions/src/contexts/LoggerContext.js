import { createContext } from 'react';

const LoggerContext = createContext();

function LoggerProvider(props) {
  const log = (value) => {
    console.log('From the Logger Context: >>>', value);
  };
  return (
    <LoggerContext.Provider value={{ log }}>
      {props.children}
    </LoggerContext.Provider>
  );
}

export { LoggerProvider, LoggerContext };
