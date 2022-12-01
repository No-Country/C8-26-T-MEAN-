import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import {
  MDBBtn,
  MDBIcon,
  MDBNavbarLink,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput
} from 'mdb-react-ui-kit';

import { useSelector } from 'react-redux'

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
      } catch (err) { }
      setStoredValue(newValue);
    };

    return [storedValue, setValue];
  };

  const [user, setUser] = useSessionStorage('usuario', '');
  const userLog = useSelector(state => state.user)
  //const points= useSelector(state =>state.points)


  //Esto es para el modal:
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);


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
              {userLog.name}
            </div>
            <div>
              {userLog.points} Puntos
            </div>
          </li>
          <li>
            <MDBBtn onClick={toggleShow} size='lg' rounded className='mx-2' color='primary'>
              Ingresar
            </MDBBtn>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
              <MDBModalDialog>
                <MDBModalContent>
                  <MDBModalHeader>
                    <MDBModalTitle>Inicie sesión</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody>
                    <MDBInput wrapperClass='col-12 mb-2' label='Email' id='form1' type='email' />
                    <MDBInput wrapperClass='col-12' label='Contraseña' id='form2' type='password' />
                    <div className="d-flex justify-content-between mx-2 mb-2">
                    </div>
                    <MDBBtn className="col-12 mb-2">Ingresar</MDBBtn>

                    <div className="text-center">
                      <p>¿Te olvidaste la contraseña?</p>
                      <MDBBtn color='secondary'>Enviar e-mail</MDBBtn>
                    </div>
                  </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn color='danger' onClick={toggleShow}>
                      CERRAR
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </li>
        </ul>
      </div>
      <div className="menuBackground">
        <div id="menuContainer">
          <label htmlFor="show-menu" className="show-menu">¡BIENVENIDO!</label>
          {/*<input type="checkbox" id="show-menu" role="button" />*/}
          <ul id="menu">
            <li><a><Link to='/' >INICIO</Link></a></li>
            <li><a><Link to='/Categories' >CATÁLOGO</Link></a></li>
            <li><a><Link to='/Gift' >FAQ's</Link></a></li>
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Navbar;