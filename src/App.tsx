import React from 'react';
import './styles/App.css';
import Home from './components/Home.tsx';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <Home></Home>
      </header>
    </div>
  );
}

export default App;
