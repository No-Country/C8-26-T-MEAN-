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
              <div>
                {userName}
              </div>
              <div>
                {points} Puntos
              </div>
          </li>
           <li>
             <MDBBtn onClick={() => loginWithRedirect()} size='lg' rounded className='mx-2' color='primary'>
              Ingresar
             </MDBBtn>
           </li>
        </ul>
        <div> Bienvenido {user.name} tenés {user.points} puntos para canjear.</div>
      </div>
      <div className="menuBackground">
        <div id="menuContainer">
          <label htmlFor="show-menu" className="show-menu">Mostrar menú</label>
          <input type="checkbox" id="show-menu" role="button" />
          <ul id="menu">
            <li><a><Link to='/' >HOME </Link></a></li>
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
