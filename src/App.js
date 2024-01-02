
import './App.css';
import ContextStore from './ContextStore/ContextStore';
import HomePage from './UI-Components/HomePage';

function App() {
  return (
    <ContextStore>
      <HomePage />
    </ContextStore>
  );
}

export default App;
