import React from 'react';
import './App.css';
import Counters from './components/counters'
import NavBar from './components/navBar';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Counters />
      <main className='container'></main>
    </React.Fragment >
  );
}

export default App;
