// import React from 'react';
// import logo from './logo.svg';
// import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='content'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
