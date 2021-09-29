import { useReducer } from 'react';
import reducer, { initialState } from './state/reducer';
import PublicMessage from './components/PublicMessage';
import MessageBoard from './components/MessageBoard';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div className='App'>
      <h2>Reaction</h2>
      <hr />
      <PublicMessage dispatch={dispatch} />
      <hr />
      <MessageBoard messages={state.messages} />
    </div>
  );
}

export default App;
