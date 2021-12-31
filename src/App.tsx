// import React from 'react';
// import logo from './logo.svg';
import "./App.css";

function App() {
  const title = "Welcome to the new Blog";
  const likes = 40;
  const link = "https://www.gogle.com";

  return (
    <div className='App'>
      <div className='content'>
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{`2 al cuadrado = ${Math.pow(2, 2)}`}</p>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
