import React, { useState } from 'react';
import { newMessage } from '../state/actions';

function PublicMessage(props) {
  const { dispatch } = props;
  const [text, setText] = useState('');

  const publishMessage = () => {
    if (text) {
      dispatch(newMessage(text));
      setText('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      publishMessage();
    }
  };

  return (
    <div>
      <h3>Got Something to say?</h3>
      <input
        type='text'
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyPress={handleKeyPress}
      />{' '}
      <button onClick={publishMessage}>Publish it!</button>
    </div>
  );
}

export default PublicMessage;
