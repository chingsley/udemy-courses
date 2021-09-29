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
        const { id, text, timestamp, username } = message;
        return (
          <div key={id}>
            <h4>{new Date(timestamp).toLocaleDateString()}</h4>
            <p>{text}</p>
            <h4>- {username}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default MessageBoard;
