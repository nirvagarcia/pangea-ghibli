import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';
import Catalog from './components/Catalog.tsx';
import Devices from './components/Devices.tsx';
import Subscriptions from './components/Subscriptions.tsx';
import Footer from './components/Footer.tsx';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Home></Home>
        <Catalog></Catalog>
        <Devices></Devices>
        <Subscriptions></Subscriptions>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;