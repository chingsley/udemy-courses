import React, { useState } from 'react';
import { newMessage } from '../state/actions';

// import { useContext } from 'react';
// import Context from '../context';
import { useAppContext } from '../customHooks';

function PublicMessage() {
  const {
    state: { username },
    dispatch,
  } = useAppContext();
  const [text, setText] = useState('');

  const publishMessage = () => {
    if (text) {
      dispatch(newMessage({ text, username }));
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
