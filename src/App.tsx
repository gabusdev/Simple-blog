// import React from 'react';
// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "Welcome to the new Blog";
  const likes = 40;
  const link = "https://www.gogle.com";

  return (
    <div className='App'>
      <div className='content'>
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
