import React from 'react';
import { useAppContext } from '../customHooks';
import { createReaction } from '../state/actions';
import { REACTION_OBJECTS } from '../state/types';

function CreateReaction({ messageId }) {
  const {
    state: { username },
    dispatch,
  } = useAppContext();

  const addReaction =
    ({ emoji, type }) =>
    () => {
      dispatch(createReaction({ messageId, emoji, type, username }));
    };
  return (
    <div className='CreateReaction'>
      {REACTION_OBJECTS.map(({ type, emoji }) => (
        <span key={type} onClick={addReaction({ emoji, type })}>
          {emoji}
        </span>
      ))}
    </div>
  );
}

export default CreateReaction;
