import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import {
  MDBBtn,
  MDBIcon,
  MDBNavbarLink
} from 'mdb-react-ui-kit';

export default function Navbar) {

  return (
    <div>
      <div className="menuBackground">
        <div id="menuContainerInfo">
          <label for="show-menu" className="show-menu">Mostrar menú</label>
          <input type="checkbox" id="show-menu" role="button" />
          <ul id="menu">
            <li><MDBBtn size='lg' rounded className='mx-2' color='secondary'>
              Ingresar
            </MDBBtn></li>
            <li>
              <MDBNavbarLink id="icono" href='#'>
                <MDBIcon fas icon='shopping-cart' />
              </MDBNavbarLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="menuBackground">
        <div id="menuContainer">
          <label for="show-menu" className="show-menu">Mostrar menú</label>
          <input type="checkbox" id="show-menu" role="button" />
          <ul id="menu">
            <li><a><Link to='/' >CATÁLOGO </Link></a></li>
            <li><a><Link to='/Gift' >¿QUÉ ES GIFTCLUB?</Link></a></li>
            <li><a><Link to='/Faq' >PREGUNTAS FRECUENTES</Link></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}