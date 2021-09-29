import React, { useState } from 'react';
import { newMessage } from '../state/actions';

import useStoreContext from '../customHooks/useStoreContext';
import useLoggerContext from '../customHooks/useLoggerContext';

function PublicMessage() {
  const { dispatch } = useStoreContext();
  const { log } = useLoggerContext();
  log('testing.....');
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
