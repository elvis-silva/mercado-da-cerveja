import React from 'react';
import logo from './img/beer-cup.png';
import sula from './img/final-sula.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sula} className="logo" alt="final copa sul americana" />
        <p>Vem assistir com a gente sábado 17h</p>
        <p>Rua Trinta e Dois, 171, D. Pedro II</p>
        <img src={logo} className="logo" alt="logo" />
        <h2>Mercado da Cerveja</h2>
        <p>
          SITE EM CONSTRUÇÃO
        </p>
        <p>
          Logo estaremos no ar
        </p>
      </header>
    </div>
  );
}

export default App;
