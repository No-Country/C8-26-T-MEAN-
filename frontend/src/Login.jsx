import React from 'react'
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
}
  from 'mdb-react-ui-kit';

function Login() { //los componentes en React son funciones. Su nombre comienza en mayúscula. Retorna jsx
  return (
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
              Recuerda que a más puntos más posibilidades de llevarte todos los productos. (;
              <br />¡Que los disfrutes!
            </p>
          </MDBCol>
          <MDBCol md='6'>
            <MDBCard className='my-5'>
              <MDBCardBody className='p-5'>
                <MDBInput wrapperClass='mb-4' label='Correo electrónico' id='form1' type='email' />
                <MDBInput wrapperClass='mb-4' label='Contraseña' id='form1' type='password' />
                <MDBBtn className='w-100 mb-4' size='md'>Ingresar</MDBBtn>
                <div className="text-center">
                  <p>Olvidé mi usuario o contraseña. :(</p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default Login
