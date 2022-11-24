import React, { useState, useEffect, useRef } from 'react';
// import { Redirect } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBCheckbox,
//   MDBIcon
// }  from 'mdb-react-ui-kit';
import crypto from 'crypto-js'
const BACKEND_ADDRESS = 'http://localhost:3001';

function Login(){
	const privateSeed = 'DigitalHouse';

	const username = useRef();
	const password = useRef();
	console.log(username);
	const [loginError, setLoginError] = useState(false);
	const [redirect, setRedirect] = useState(false);
	
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
		<div className="container-fluid">
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Login Form */}
							{/* <form method="POST" onSubmit={loginFetch}> */}
								<div className="form-group">
									<label htmlFor="">Nombre de usuario o email:</label>
									<input type="text" ref={username} className="form-control" id="email"/>
									<label htmlFor="">Contraseña:</label>
									<input type="password" ref={password} className="form-control" id="password"/>
								</div>
									<button className="btn btn-info" onClick={loginFetch}>Login</button>
									{redirect ? <redirect to="/"/> : ''}
							{/* </form> */}
						</div>
					</div>
				</>
			{loginError ? <div className="alert alert-danger text-center my-4 fs-2">Usuario o contraseña incorrecta</div> : <></>}
			
		</div>
	)
}

export default Login;

