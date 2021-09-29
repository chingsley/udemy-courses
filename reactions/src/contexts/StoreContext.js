import React, { useReducer } from 'react';
import { createContext } from 'react';
import reducer, { initialState } from '../state/reducer';

const StoreContext = createContext();

function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
}

export { StoreProvider, StoreContext };
