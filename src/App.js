import React from 'react';
import './App.css';

import importPics from "./utils/importPics"; 

const App = () => {
    const images = importPics(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="App" style={{display: "flex"}}>
      {images.map((img => [
        <img style={{width: "200px", height: "auto"}} alt="pic" src={img}></img>
      ]))}
    </div>
  );
}

export default App;
