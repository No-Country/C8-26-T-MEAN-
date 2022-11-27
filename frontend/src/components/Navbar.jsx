import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import {
  MDBBtn,
  MDBIcon,
  MDBNavbarLink
} from 'mdb-react-ui-kit';

//import { useAuth0 } from '@auth0/auth0-react'

import {useSelector} from 'react-redux'

function Navbar() {


  const useSessionStorage = (keyName, defaultValue) => {
		const [storedValue, setStoredValue] = React.useState(() => {
		  try {
			const value = window.sessionStorage.getItem(keyName);
	  
			if (value) {
			  return JSON.parse(value);
			} else {
//			  window.sessionStorage.setItem(keyName, JSON.stringify(defaultValue));
			  return defaultValue;
			}
		  } catch (err) {
			return defaultValue;
		  }
		});
	  
		const setValue = newValue => {
		  try {
			window.sessionStorage.setItem(keyName, JSON.stringify(newValue));
		  } catch (err) {}
		  setStoredValue(newValue);
		};
	  
		return [storedValue, setValue];
	};


const [user, setUser] = useSessionStorage('usuario','');

  //const { loginWithRedirect } = useAuth0();
   const userName= useSelector(state =>state.user)
   const points= useSelector(state =>state.points)

  return (
    <div>
      <div>
      <Link to='/' >
        <span className='gitclub-logo'></span>
      </Link>
        <ul className='lista-boton-carrito'>
          <li id="icono_li">
            <MDBNavbarLink id="icono" to='#'>
              <MDBIcon fas icon='shopping-cart' />
            </MDBNavbarLink>
          </li>
          <li>
              <div class="user-name">
                {userName}
              </div>
              <div class="user-points">
                {points} Puntos
              </div>
          </li>
           <li>
             <MDBBtn onClick={() => loginWithRedirect(login)} size='lg' rounded className='mx-2' class="btn-ingresar">
              Ingresar
             </MDBBtn>
           </li>
        </ul>
      </div>
      <div className="menuBackground">
        <div id="menuContainer">
          <label htmlFor="show-menu" className="show-menu">Mostrar menú</label>
          <input type="checkbox" id="show-menu" role="button" />
          <ul id="menu">
            <li><a><Link to='/' id="menu" >HOME </Link></a></li>
            <li><a><Link to='/Categories' id="menu" >CATÁLOGO </Link></a></li>
            <li><a><Link to='/Gift' id="menu">¿QUÉ ES GIFTCLUB?</Link></a></li>
            <li><a><Link to='/Faq' id="menu">PREGUNTAS FRECUENTES</Link></a></li>
          </ul>
        </div>
      </div>
    </div>
      
  );
}

export default Navbar;