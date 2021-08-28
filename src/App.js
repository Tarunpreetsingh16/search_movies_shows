import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    console.log("helloooooo");
  }, []);
  return (
    <div className="App">
    </div>
  );
}

export default App;
