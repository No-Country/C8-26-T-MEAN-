import React, { useState, useEffect, useRef } from 'react';
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
	const [loginError, setLoginError] = useState(false);
	const [redirect, setRedirect] = useState(false);
	
	const loginFetch = (e) => {
		e.preventDefault();
		setLoginError(false);
		
		const cryptedPassword = crypto.AES.encrypt(password.current.value, privateSeed).toString();


		const hashPassword = crypto.AES.decrypt(cryptedPassword, privateSeed);
		const decryptedPassword = hashPassword.toString(crypto.enc.Utf8); 

		const data = {
			username: username.current.value,
			password: cryptedPassword
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
			.then(data => registerLogin(data));

	}

	return(
			<div className="Login">
			<MDBContainer fluid className='p-4'>
			<MDBRow>
				<MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
				<h1 className="my-5 display-3 fw-bold ls-tight px-3">
					¡Bienvenido a<br />
					<span className="text-primary" class="gif-club">GIFTClub!</span>
				</h1>
	
				<h3>¿Qué es GiftClub?</h3>
				<p className='px-3'>
					GiftClub es un sistema de puntos acumulables que pueden ser canjeados
					por cualquiera de los productos que se encuentran dentro del catálogo de este sitio. 
					Recuerda que a más puntos más posibilidades de llevarte todos los productos.¡Que los disfrutes!
				</p>
				</MDBCol>
				<MDBCol md='6'>
				<MDBCard className='my-5'>
					<MDBCardBody className='p-5'>
					<MDBInput wrapperClass='mb-4' label='Correo electrónico' id='email' type='email'ref={username} />
					<MDBInput wrapperClass='mb-4' label='Contraseña' id='password' type='password' ref={password} />
					<MDBBtn className='w-100 mb-4' size='md' onClick={loginFetch}>Ingresar</MDBBtn>
					<div className="text-center">
						<p>¿Olvidó su contraseña?</p>
					</div>
					</MDBCardBody>
				</MDBCard>
				</MDBCol>
			</MDBRow>
			</MDBContainer>
		</div>
	)
}

export default Login;

