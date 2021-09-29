import React from 'react';

function MessageBoard(props) {
  const { messages } = props;
  console.log({ messages });
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
