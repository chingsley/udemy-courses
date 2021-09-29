import { useContext } from 'react';
import { LoggerContext } from '../contexts/LoggerContext';

function useLoggerContext() {
  return useContext(LoggerContext);
}

export default useLoggerContext;
