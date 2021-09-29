import React from 'react';

// import { useContext } from 'react';
// import Context from '../context';
import { useAppContext } from '../customHooks';

function MessageBoard() {
  const {
    state: { messages },
  } = useAppContext();

  return (
    <div>
      {messages.map((message) => {
        const { id, text, timestamp } = message;
        return (
          <div key={id}>
            <h4>{new Date(timestamp).toLocaleDateString()}</h4>
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MessageBoard;
