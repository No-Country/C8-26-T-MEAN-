import React, { useState,useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../store/slices/users.slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getProductThunk,setValueProduct} from '../store/slices/products.slice'
import crypto from 'crypto-js'
import axios from 'axios';
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

const Navbar= () =>{
   
 useEffect(() => {
    const local =sessionStorage.getItem('usuario');
  //  console.log(local,"1231")
    const usuario=JSON.parse(local)
    //console.log(local2,"adsasdasd")
        if(usuario){
 

          
        } else{



        }

  }, [])
  

  //Código sacado del componente Login.jsx
  const privateSeed = 'DigitalHouse';

  const username = useRef();
  const password = useRef();
  console.log(username);
  const [loginError, setLoginError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const notifySucces = () => toast("Ingreso correctamente");
  const notifyError = (e) => toast(`Error al Ingresar: ${e}`);

  const loginFetch = (e) => {
    e.preventDefault();
    setLoginError(false);
    
    const cryptedPassword = crypto.AES.encrypt(password.current.value, privateSeed).toString();
    const data = {
      username: username.current.value,
      password: cryptedPassword,
    }
    console.log(data)

    const registerLogin = data => {
      if (data.access === 'Granted') {
        sessionStorage.setItem('usuario', JSON.stringify(data.user));
        setRedirect(true);
      } else {
        setLoginError(true);
        sessionStorage.removeItem('usuario');
      }
    }
    axios.post(`${BACKEND_ADDRESS}/users/auth`,data)
    .then(res =>
      {
        const data =res.data
        console.log(data.user)
        registerLogin(data)
        const address=data.user.adress
        const email=data.user.email
        const id=data.user.id
        const image=data.user.image
        const name=data.user.name
        const points=data.user.points
        const role=data.user.role
        
        if(data.orderSales){
           let orderPoints=data.user.orderSales.ammount
           let cant=data.user.orderSales.items_q
           dispatch(setValueProduct({cant}))
          dispatch(setValue({id,name,email,points,role,address,orderPoints,cant,image}))


        }else{
          dispatch(setValueProduct({cant:0}))
          dispatch(setValue({id,name,email,points,role,address,orderPoints:0,cant:0,image}))
        }
                // dispatch(setValuePoints(data.user.points))     
                 notifySucces()
         setBasicModal(!basicModal);
         
      }).catch(e=>{
        console.log(e)
        notifyError(e.response.data.detail)
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
  }

  const [user, setUser] = useSessionStorage('usuario', '');
  const userLog = useSelector(state => state.user)
  const product = useSelector(state => state.product)
  //const points= useSelector(state =>state.points)


  //Esto es para el modal:
  const navigate = useNavigate() 
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
const handleClick = () =>{
navigate("/Purchase")
}

  return (
    <div>
      <div>
        <Link to='/' >
          <span className='gitclub-logo'></span>
        </Link>
        <ul className='lista-boton-carrito'>
          <li id="icono_li">
            <MDBNavbarLink id="icono" onClick={handleClick}>
              <MDBIcon fas icon='shopping-cart' />
                {product.cant}
            </MDBNavbarLink>
          </li>
          <li>

             <div className='logo'>
              <img src={userLog.image} alt="" />
             </div>
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
                    
                        <label htmlFor="">Nombre de usuario o email:</label>
                        <input type="text" ref={username} className="form-control" id="email"/>
                        <label htmlFor="">Contraseña:</label>
                        <input type="password" ref={password} className="form-control" id="password"/>
	 				
                   
                    {redirect ? <Link to="/" /> : ''}
                    <div className="text-center">
                    
                      <p>¿Te olvidaste la contraseña?</p>
                  
                    </div>
                    <MDBBtn className="col-12 mb-2" onClick={loginFetch}>Ingresar</MDBBtn>
                    {loginError ? <div className="alert alert-danger text-center my-4 fs-2">Usuario o contraseña incorrecta</div> : <></>}
                  </MDBModalBody>
                 
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