import React, { useState, useEffect, useRef } from 'react';
import { redirect } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setValue } from '../store/slices/users.slice';
import { setValuePoints } from '../store/slices/points.slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}  from 'mdb-react-ui-kit';
import crypto from 'crypto-js'
const BACKEND_ADDRESS = 'http://localhost:3001';

function Login(){
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
/*		const hashPassword = crypto.AES.decrypt(cryptedPassword, privateSeed);
		const decryptedPassword = hashPassword.toString(crypto.enc.Utf8); */
		const data = {
			username: username.current.value,
			password: cryptedPassword,
		}

		const registerLogin = data => {
			if (data.access === 'Granted') {
				sessionStorage.setItem('usuario', JSON.stringify(data.user));
				// localStorage.setItem('usuario', JSON.stringify(data.user));
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
			.then(data => 
				{
					//console.log(data.user)
					registerLogin(data)
                   dispatch(setValue(data.user.name))     
                   dispatch(setValuePoints(data.user.points))     
                   notifySucces()
				   
				}).catch(e=>{
					console.log(e)
					notifyError()
				});

	}
	
	return(
		<div className="Login">
		  <MDBContainer fluid className='p-4'>
			<MDBRow>
			  <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
				<h1 className="my-5 display-3 fw-bold ls-tight px-3">
				   ¡Bienvenido a<br />
				  <span className="text-primary">GIFTClub!</span>
				</h1>
				<p className='px-3'>
				  ¿Qué es GiftClub? GiftClub es un sistema de puntos acumulables que pueden ser canjeados
				  por cualquiera de los productos que se encuentran dentro del catálogo de este sitio. 
				  Recuerda que a más puntos más posibilidades de llevarte todos los productos.
				  <br />¡Que los disfrutes!
				</p>
			  </MDBCol>
			  <MDBCol md='6'>
				<MDBCard className='my-5'>
				  <MDBCardBody className='p-5'>
				  <div className="form-group">
	 								<label htmlFor="">Nombre de usuario o email:</label>
	 								<input type="text" ref={username} className="form-control" id="email"/>
	 								<label htmlFor="">Contraseña:</label>
	 								<input type="password" ref={password} className="form-control" id="password"/>
	 							</div>
	 								<button className="btn btn-info" onClick={loginFetch}>Login</button>
					{redirect ? <redirect to="/"/> : ''}
					<div className="text-center">
					  <p>Olvidé mi usuario o contraseña. :(</p>
					</div>
					{loginError ? <div className="alert alert-danger text-center my-4 fs-2">Usuario o contraseña incorrecta</div> : <></>}
				  </MDBCardBody>
				</MDBCard>
			  </MDBCol>
			</MDBRow>
		  </MDBContainer>
		  <ToastContainer 
		position="top-center"
		autoClose={1000}
		hideProgressBar
		newestOnTop={false}
		closeOnClick ={false}
		rtl={false}
		pauseOnFocusLoss
		draggable
		pauseOnHover
		theme="dark"
		  />
		</div>
	  )
	//   (
	// 	<div className="container-fluid">
	// 			<>
	// 				<div className="row my-4">
	// 					<div className="col-12 col-md-6">
	// 						{/* Login Form */}
	// 						{/* <form method="POST" onSubmit={loginFetch}> */}
	// 							<div className="form-group">
	// 								<label htmlFor="">Nombre de usuario o email:</label>
	// 								<input type="text" ref={username} className="form-control" id="email"/>
	// 								<label htmlFor="">Contraseña:</label>
	// 								<input type="password" ref={password} className="form-control" id="password"/>
	// 							</div>
	// 								<button className="btn btn-info" onClick={loginFetch}>Login</button>
	// 								{redirect ? <redirect to="/"/> : ''}
	// 						{/* </form> */}
	// 					</div>
	// 				</div>
	// 			</>
	// 		{loginError ? <div className="alert alert-danger text-center my-4 fs-2">Usuario o contraseña incorrecta</div> : <></>}
			
	// 	</div>
	// )
}

export default Login;

