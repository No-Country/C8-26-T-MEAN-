import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { productSlice } from '../store/slices/products.slice';
import { setValue } from '../store/slices/users.slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getProductThunk } from '../store/slices/products.slice'
import crypto from 'crypto-js'

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

const BACKEND_ADDRESS = 'http://localhost:3001';

function Navbar() {

  //Código sacado del componente Login.jsx
  const privateSeed = 'DigitalHouse';

  const username = useRef();
  const password = useRef();
  console.log(username);
  const [loginError, setLoginError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();


  const notifySucces = () => toast("Ingreso correctamente");
  const notifyError = () => toast("Error al Ingresar");

  const loginFetch = (e) => {
    e.preventDefault();
    setLoginError(false);

    const cryptedPassword = crypto.AES.encrypt(password.current.value, privateSeed).toString();
    const data = {
      username: username.current.value,
      password: cryptedPassword,
    }

    const registerLogin = data => {
      if (data.access === 'Granted') {
        sessionStorage.setItem('usuario', JSON.stringify(data.user));
        setRedirect(true);
      } else {
        setLoginError(true);
        sessionStorage.removeItem('usuario');
      }
    }
    fetch(`${BACKEND_ADDRESS}/users/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.user)
        registerLogin(data)
        const id = data.user.id
        const name = data.user.name
        const email = data.user.email
        const orderPoints = data.user.orderPoints
        const points = data.user.points
        const role = data.user.role
        const address = data.user.adress
        dispatch(setValue({ id, name, email, orderPoints, points, role, address }))
        dispatch(getProductThunk({ id }))
        notifySucces()
      }).catch(e => {
        console.log(e)
        notifyError()
      });
  }
  //Fin

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
  const product = useSelector(state => state.product)
  //const points= useSelector(state =>state.points)


  //Esto es para el modal:
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  //

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
              {product.cant}
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
                  <MDBModalBody className="form-group">
                    <MDBInput wrapperClass='col-12 mb-2' label='Email' type='email' ref={username} className="form-control" id="email" />
                    <MDBInput wrapperClass='col-12' label='Contraseña' type='password' ref={password} className="form-control" id="password" />
                    <div className="d-flex justify-content-between mx-2 mb-2">
                    </div>
                    <MDBBtn className="col-12 mb-2" onClick={loginFetch}>Ingresar</MDBBtn>
                    {redirect ? <redirect to="/" /> : ''}
                    <div className="text-center">
                      <p>¿Te olvidaste la contraseña?</p>
                      <MDBBtn color='secondary'>Enviar e-mail</MDBBtn>
                    </div>
                    {loginError ? <div className="alert alert-danger text-center my-4 fs-2">Usuario o contraseña incorrecta</div> : <></>}
                  </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn color='danger' onClick={toggleShow}>
                      CERRAR
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
            <ToastContainer
              position="top-center"
              autoClose={1000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </li>
        </ul>
      </div>
      <div className="menuBackground">
        <div id="menuContainer">
          <label htmlFor="show-menu" className="show-menu">¡BIENVENIDO!</label>
          {/*<input type="checkbox" id="show-menu" role="button" />*/}
          <ul id="menu">
            <li><Link to='/' >INICIO</Link></li>
            <li><Link to='/Categories' >CATÁLOGO</Link></li>
            <li><Link to='/Gift' >FAQ's</Link></li>
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Navbar;