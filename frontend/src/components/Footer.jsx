import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBRipple,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div>
      <MDBFooter className='text-center' color='white' bgColor='dark'>
        <div className='p-4 text-center text-white d-flex justify-content-center'>
          <section>
            <MDBRow className='d-flex justify-content-center'>
              <p className='fw-bold'>NUESTRO EQUIPO:</p>
              <MDBCol lg='1' md='12' className='mb-4 mb-md-0'>
                <MDBRipple
                  rippleColor='light'
                  className='bg-image hover-overlay shadow-1-strong rounded'
                >
                  <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp' className='w-100' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg='1' md='12' className='mb-4 mb-md-0'>
                <MDBRipple
                  rippleColor='light'
                  className='bg-image hover-overlay shadow-1-strong rounded'
                >
                  <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp' className='w-100' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg='1' md='12' className='mb-4 mb-md-0'>
                <MDBRipple
                  rippleColor='light'
                  className='bg-image hover-overlay shadow-1-strong rounded'
                >
                  <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp' className='w-100' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg='1' md='12' className='mb-4 mb-md-0'>
                <MDBRipple
                  rippleColor='light'
                  className='bg-image hover-overlay shadow-1-strong rounded'
                >
                  <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp' className='w-100' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg='1' md='12' className='mb-4 mb-md-0'>
                <MDBRipple
                  rippleColor='light'
                  className='bg-image hover-overlay shadow-1-strong rounded'
                >
                  <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp' className='w-100' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg='1' md='12' className='mb-4 mb-md-0'>
                <MDBRipple
                  rippleColor='light'
                  className='bg-image hover-overlay shadow-1-strong rounded'
                >
                  <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp' className='w-100' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg='1' md='12' className='mb-4 mb-md-0'>
                <MDBRipple
                  rippleColor='light'
                  className='bg-image hover-overlay shadow-1-strong rounded'
                >
                  <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp' className='w-100' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
            </MDBRow>
          </section>
        </div>

        <MDBContainer className='p-4'>

          <section className='mb-4 text-white'>
            <p>
              ¿Qué es GiftClub?<br />Es un sistema de puntos acumulables que pueden ser canjeados por cualquiera
              de los productos que se encuentran dentro del catálogo de este sitio. <br />
              A más puntos tenga el usuario, habrá más posibilidad de llevarse todos los
              productos.
            </p>
          </section>
        </MDBContainer>

        <div className='text-center p-3 fw-bold' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2022 | Un proyecto de:
          <a className='text-white fw-bold'> C8-26-T-MEAN</a>
        </div>
      </MDBFooter>

    </div>
  )
}

export default Footer