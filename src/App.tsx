import React from 'react';
import './styles/App.css';
import './styles/swiper.css';
import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';
import Catalog from './components/Catalog.tsx';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Home></Home>
        <Catalog></Catalog>
      </header>
    </div>
  );
}

export default App;