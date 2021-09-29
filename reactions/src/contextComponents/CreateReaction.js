import React from 'react';
import { useAppContext } from '../customHooks';
import { createReaction } from '../state/actions';
import { REACTION_OBJECTS } from '../state/types';

function CreateReaction({ messageId }) {
  const {
    state: { username },
    pubsub: { publish },
  } = useAppContext();

  const publishReaction =
    ({ emoji, type }) =>
    () => {
      publish(createReaction({ messageId, emoji, type, username }));
    };
  return (
    <div className='CreateReaction'>
      {REACTION_OBJECTS.map(({ type, emoji }) => (
        <span key={type} onClick={publishReaction({ emoji, type })}>
          {emoji}
        </span>
      ))}
    </div>
  );
}

export default CreateReaction;
