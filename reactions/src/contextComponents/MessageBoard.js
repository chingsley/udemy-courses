import React from 'react';

// import { useContext } from 'react';
// import Context from '../context';
import { useAppContext } from '../customHooks';
import CreateReaction from './CreateReaction';
import MessageReactions from './MessageReactions';

function MessageBoard() {
  const {
    state: { messages, reactionsMap },
  } = useAppContext();

  return (
    <div>
      {messages.map((message) => {
        const { text, timestamp, username } = message;
        return (
          <div key={message.id}>
            <h4>{new Date(timestamp).toLocaleDateString()}</h4>
            <p>{text}</p>
            <h4>- {username}</h4>
            <CreateReaction messageId={message.id} />
            <MessageReactions messageReactions={reactionsMap[message.id]} />
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default MessageBoard;
