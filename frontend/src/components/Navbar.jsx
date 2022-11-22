import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import {
  MDBBtn,
  MDBIcon,
  MDBNavbarLink
} from 'mdb-react-ui-kit';
import { useAuth0 } from '@auth0/auth0-react' 

function Navbar() {

  const {loginWithRedirect} = useAuth0();

  return (
    <div>
      <div className="menuBackground">
        <div id="menuContainerInfo">
          <label htmlFor="show-menu" className="show-menu">Mostrar menú</label>
          <input type="checkbox" id="show-menu" role="button" />
          <ul id="menu">
            <li><MDBBtn onClick={() => loginWithRedirect()} size='lg' rounded className='mx-2' color='secondary'>
              Ingresar
            </MDBBtn></li>
            
            <li>
              <MDBNavbarLink id="icono" to='#'>
                <MDBIcon fas icon='shopping-cart'/>
              </MDBNavbarLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="menuBackground">
        <div id="menuContainer">
          <label htmlFor="show-menu" className="show-menu">Mostrar menú</label>
          <input type="checkbox" id="show-menu" role="button" />
          <ul id="menu">
            <li><a><Link to='/Categories' >CATÁLOGO </Link></a></li>
            <li><a><Link to='/Gift' >¿QUÉ ES GIFTCLUB?</Link></a></li>
            <li><a><Link to='/Faq' >PREGUNTAS FRECUENTES</Link></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Navbar
