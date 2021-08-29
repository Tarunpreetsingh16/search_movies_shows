import { useEffect } from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import { setupTheme } from './utilities/theme';
import Footer from './components/Footer'
import NavBar from './components/NavBar';

function App() {
  useEffect(() => {
    setupTheme();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
