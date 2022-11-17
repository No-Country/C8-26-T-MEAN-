import React from 'react';
import './styles/Navbar.css'

export default function App() {

  return (
    <div id="menuBackground">
      <div id="menuContainer">
        <label for="show-menu" className="show-menu">Mostrar menú</label>
        <input type="checkbox" id="show-menu" role="button" />
        <ul id="menu">
          <li><a href="#">CATÁLOGO</a>
          </li>
          <li><a href="#">¿QUÉ ES GIFTCLUB?</a>
          </li>
          <li><a href="#">PREGUNTAS FRECUENTES</a>
          </li>
          <li>
            <a href="#">Portfolio ￬</a>
            <ul className="hidden">
              <li><a href="#">Photography</a></li>
              <li><a href="#">Web & User Interface Design</a></li>
              <li><a href="#">Illustration</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}