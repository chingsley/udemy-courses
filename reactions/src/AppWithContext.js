import { useReducer, useEffect } from 'react';
import Context from './context';
import reducer, { initialState } from './state/reducer';
import PubSub from './pubsub';
import PublicMessage from './contextComponents/PublicMessage';
import MessageBoard from './contextComponents/MessageBoard';

import SetUsername from './contextComponents/SetUsername';

const pubsub = new PubSub();

setTimeout(() => {
  pubsub.publish({ type: 'foo', value: 'bar' });
}, 1000);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    pubsub.addListener({
      message: (messageObject) => {
        const { channel, message } = messageObject;

        console.log('Received message', message, 'channel', channel);

        dispatch(message);
      },
    });
  }, []);

  return (
    <Context.Provider value={{ state, dispatch, pubsub }}>
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
