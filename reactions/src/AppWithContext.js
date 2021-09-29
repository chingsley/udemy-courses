import PublicMessage from './contextComponents/PublicMessage';
import MessageBoard from './contextComponents/MessageBoard';
import { StoreProvider } from './contexts/StoreContext';
import { LoggerProvider } from './contexts/LoggerContext';

function App() {
  return (
    <StoreProvider>
      <LoggerProvider>
        <h2>Reaction</h2>
        <hr />
        <PublicMessage />
        <hr />
        <MessageBoard />
      </LoggerProvider>
    </StoreProvider>
  );
}

export default App;
