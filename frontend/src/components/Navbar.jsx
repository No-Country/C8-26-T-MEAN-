import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/navbar.css'

export default function App() {

  return (
    <div id="menuBackground">
      <div id="menuContainer">
        <label for="show-menu" className="show-menu">Mostrar menú</label>
        <input type="checkbox" id="show-menu" role="button" />
        <ul id="menu">
          <li><a><Link to ='/' >CATALOGO </Link></a></li>
          <li><a><Link to ='/Gift' >QUE ES GIFT CLUB?</Link></a></li>
          <li><a><Link to ='/Faq' >PREGUNTAS FRECUENTES</Link></a></li>
        </ul>
      </div>
    </div>
  );
}