import { useEffect } from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import { setupTheme } from './utilities/theme';

function App() {
  useEffect(() => {
    setupTheme();
  }, []);

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
