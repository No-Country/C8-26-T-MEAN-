import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import {
  MDBBtn,
  MDBIcon,
  MDBNavbarLink
} from 'mdb-react-ui-kit';
<<<<<<< HEAD
import { useAuth0 } from '@auth0/auth0-react' 

function Navbar() {

  const {loginWithRedirect} = useAuth0();
=======

export default function Navbar () {
>>>>>>> 5957ac18322d0475539dc9f4d3b66248a3de83c6

  return (
    <div>
      <div className="menuBackground">
        <div id="menuContainerInfo">
<<<<<<< HEAD
          <label htmlFor="show-menu" className="show-menu">Mostrar menú</label>
          <input type="checkbox" id="show-menu" role="button" />
          <ul id="menu">
            <li><MDBBtn onClick={() => loginWithRedirect()} size='lg' rounded className='mx-2' color='secondary'>
=======
          <label for="show-menu" className="show-menu">Mostrar menú</label>
          <input type="checkbox" id="show-menu" role="button" />
          <ul id="menu">
            <li><MDBBtn  href='#' size='lg' rounded className='mx-2' color='secondary'>
>>>>>>> 5957ac18322d0475539dc9f4d3b66248a3de83c6
              Ingresar
            </MDBBtn></li>
            
            <li>
<<<<<<< HEAD
              <MDBNavbarLink id="icono" to='#'>
=======
              <MDBNavbarLink id="icono" href='#'>
>>>>>>> 5957ac18322d0475539dc9f4d3b66248a3de83c6
                <MDBIcon fas icon='shopping-cart'/>
              </MDBNavbarLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="menuBackground">
        <div id="menuContainer">
<<<<<<< HEAD
          <label htmlFor="show-menu" className="show-menu">Mostrar menú</label>
=======
          <label for="show-menu" className="show-menu">Mostrar menú</label>
>>>>>>> 5957ac18322d0475539dc9f4d3b66248a3de83c6
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
<<<<<<< HEAD
}


export default Navbar
=======
}
>>>>>>> 5957ac18322d0475539dc9f4d3b66248a3de83c6
