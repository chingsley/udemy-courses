import React from 'react';
import { useAppContext } from '../customHooks';
import { setUsername } from '../state/actions';

function SetUsername() {
  const {
    state: { username },
    dispatch,
  } = useAppContext();

  const updateUsername = (e) => {
    dispatch(setUsername(e.target.value));
  };

  return (
    <div>
      <h3>Username</h3>
      <input type='text' onChange={updateUsername} value={username} />
    </div>
  );
}

export default SetUsername;
