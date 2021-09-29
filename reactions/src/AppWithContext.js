import { useReducer } from 'react';
import Context from './context';
import reducer, { initialState } from './state/reducer';
import PublicMessage from './contextComponents/PublicMessage';
import MessageBoard from './contextComponents/MessageBoard';

import './pubsub';
import SetUsername from './contextComponents/SetUsername';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <h2>Reaction</h2>
      <hr />
      <SetUsername />
      <hr />
      <PublicMessage />
      <hr />
      <MessageBoard />
    </Context.Provider>
  );
}

export default App;
