import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Gift from './components/Gift';
import Faq from './components/Faq';
import Products from './components/Products';
import Categories from './components/Categories';
// import LoginButton from './components/Login'
// import LogoutButton from './components/LogoutButton'
// import Profile from './components/Profile'
import DetailProduct from './components/DetailProduct';
import Purchase from './components/Purchase';
import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
  MDBCardImage,
} from 'mdb-react-ui-kit';



function App() { //los componentes en React son funciones. Su nombre comienza en mayúscula. Retorna jsx
 
  const [staticModal, setStaticModal] = useState(false);
  const [topRightModal, setTopRightModal] = useState(false);
  const toggleShow = () => setTopRightModal(!topRightModal);

  return (

    <div className="App">

      <MDBBtn onClick={toggleShow} size='lg' rounded className='col-2 btn-dark ' class="btn-ingresar">INGRESAR</MDBBtn>
      <MDBModal 
        animationDirection='right'
        show={topRightModal}
        tabIndex='-1'
        setShow={setTopRightModal}>
        <MDBModalDialog position='top-right' side>
          <MDBModalContent>
            <MDBModalHeader>

              <MDBModalTitle><h3 class="login-modal" className="col-12" style={{letterSpacing: '2px'}}>INICIAR SESIÓN</h3>

              </MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className="p-3 my-8 d-flex flex-column w-100">

            <MDBInput wrapperClass='col-12 mb-2' label='Email' id='form1' type='email'/>
            <MDBInput wrapperClass='col-12' label='Contraseña' id='form2' type='password'/>
            <div className="d-flex justify-content-between mx-2 mb-2">
      </div>
      <MDBBtn className="col-12 mb-2">Ingresar</MDBBtn>

      <div className="text-center">
        <p>¿Te olvidaste la contraseña? <a href="#!">Enviar e-mail.</a></p>
      </div>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='danger' onClick={toggleShow}>
                Cerrar
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
     
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Categories' element={<Categories/>} />
          <Route path='/Gift' element={<Gift/>} />
          <Route path='/Products' element={<Products/>} />
          <Route path='/DetailProduct/:id' element={<DetailProduct/>} />
          <Route path='/Purchase' element={<Purchase/>} />
      </Routes>

    </div>

  );

}



export default App;