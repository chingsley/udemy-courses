import { NEW_MESSAGE, SET_USERNAME, REACTION_OBJECTS } from './types';

export const initialState = {
  messages: [],
  username: 'anonymous',
  reactionsMap: {},
};

const REACTION_TYPES = REACTION_OBJECTS.map(({ type }) => type);

const reducer = (state, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.item],
      };

    case SET_USERNAME:
      return { ...state, username: action.username };

    case REACTION_TYPES.find((type) => type === action.type):
      const { messageId } = action.item;
      const messageReactions = state.reactionsMap[messageId];
      return {
        ...state,
        reactionsMap: {
          ...state.reactionsMap,
          [messageId]: messageReactions
            ? [...messageReactions, action.item]
            : [action.item],
        },
      };

    default:
      return state;
  }
};

export default reducer;
