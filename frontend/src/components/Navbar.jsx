import React, { useState,useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../store/slices/users.slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getProductThunk,setValueProduct} from '../store/slices/products.slice'
import {getUserThunk} from '../store/slices/users.slice'
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
    console.log(usuario,"adsasdasd")
        if(usuario){
        //  dispatch(getUserThunk(usuario))

           const address=usuario.address || "dasd"
             const email=usuario.email
           const id=usuario.id
           const image=usuario.image
          const name=usuario.name
           const points=usuario.points
           const role=usuario.role
          
           if(usuario.orderSales!==0){
              let orderPoints=usuario.orderSales.ammount
              let cant=usuario.orderSales.items_q
             dispatch(setValueProduct({cant}))
             dispatch(setValue({id,name,email,points,role,address,orderPoints,cant,image}))
           }else{
             dispatch(setValueProduct({cant:0}))
             dispatch(setValue({id,name,email,points,role,address,orderPoints:0,cant:0,image}))
           }
          setSession(true)
        }
  }, [])
  //Código sacado del componente Login.jsx
  const privateSeed = 'DigitalHouse';
  const username = useRef();
  const password = useRef();
  const [session, setSession] = useState(false);
  const dispatch = useDispatch();
  const notifySucces = () => toast("Wellcome to GifClub");
  const notifyError = (e) => toast(`Error: ${e}`);
  const loginFetch = (e) => {
    e.preventDefault();
    const cryptedPassword = crypto.AES.encrypt(password.current.value, privateSeed).toString();
    const data = {
      username: username.current.value,
      password: cryptedPassword,
    }
    axios.post(`${BACKEND_ADDRESS}/users/auth`,data)
    .then(res =>
      {
        const data =res.data
        console.log(data.user)
        sessionStorage.setItem('usuario', JSON.stringify(data.user));
        const address=data.user.adress
        const email=data.user.email
        const id=data.user.id
        const image=data.user.image
        const name=data.user.name
        const points=data.user.points
        const role=data.user.role
        if(data.orderSales!==0){
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
        setSession(true)
        
      }).catch(e=>{
        console.log(e)
        notifyError(e.response.data.detail)
      });
    }
    
  const userLog = useSelector(state => state.user)
  const product = useSelector(state => state.product)

  //Esto es para el modal:
  const navigate = useNavigate() 
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () =>{
    
     if(!session){
       setBasicModal(!basicModal)
     }else{

      sessionStorage.removeItem('usuario');
      dispatch(setValueProduct(""))
      dispatch(setValue(""))
      console.log("dasdasd")
    
    setSession(false)
    }
  } 
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
            <MDBBtn onClick={toggleShow} size='lg' rounded className='mx-2 asd' color='primary'>
            { !session ? "ingresar": "salir"}
            </MDBBtn>
          <li id="icono_li">
            {
              session ?
                <div>
                <MDBNavbarLink id="icono" onClick={handleClick}>
                  <MDBIcon fas icon='shopping-cart' />
                    {product.cant}
                </MDBNavbarLink>
                </div>
              :
              ""
            }
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
            {
              session? 
              <div>
                {userLog.points} Puntos

            </div>
              :
              ""
            }
          </li>

          <li>
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
                    <div className="text-center">
                    
                      <p>¿Te olvidaste la contraseña?</p>
                  
                    </div>
                    <MDBBtn className="col-12 mb-2" onClick={loginFetch}>Ingresar</MDBBtn>
                
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