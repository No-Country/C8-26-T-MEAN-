import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import {
  MDBBtn,
  MDBIcon,
  MDBNavbarLink
} from 'mdb-react-ui-kit';

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

  return (
    <div>
      <div> Bienvenido {user.name} tenés {user.points} puntos para canjear.</div>
      <div className="menuBackground">
        <div id="menuContainerInfo">
          <label htmlFor="show-menu" className="show-menu">Mostrar menú</label>
          <input type="checkbox" id="show-menu" role="button" />
          <ul id="menu">
            <li>
              <MDBNavbarLink id="icono" to='#'>
                <MDBIcon fas icon='shopping-cart'/>
                
              </MDBNavbarLink>
            </li>
            <li><MDBBtn size='lg' rounded className='mx-2' color='primary'>
              Ingresar
            </MDBBtn></li>
          </ul>
        </div>
      </div>
    </div>
      
  );
}


export default Navbar
