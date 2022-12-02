import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBRipple
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className=''>
          <MDBContainer className='p-4'>
            <MDBRow className='mt-3'>
              <MDBCol lg='3' md='12' className='mx-auto mb-4'>
                <h6 className='text-uppercase'>GiftClub</h6>
                <p>
                  Es un sistema de puntos acumulables que pueden ser canjeados por cualquiera
                  de los productos que se encuentran dentro del catálogo de este sitio. <br />
                  A más puntos tenga el usuario, habrá màs posibilidad de llevarse todos los
                  productos.
                </p>
              </MDBCol>
              <MDBCol lg='9' md='12' className='mx-auto mb-4'>
                <h6 className='text-uppercase'>Conozca a nuestro equipo:</h6>
                <MDBRow>
                  <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
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
                  <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
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
                  <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
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
                  <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
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
                  <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
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
                  <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
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
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <div className='text-center p-4 fw-bold' style={{ backgroundColor: 'rgba(254, 195, 16)' }}>
          © 2022 Copyright:
          <a className='fw-bold'> C8-26-T-MEAN</a>
        </div>
      </MDBFooter>

    </div>
  )
}

export default Footer