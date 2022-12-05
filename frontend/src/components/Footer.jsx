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
                  <img src='src/assets/team_ef.jpg' className='w-100 rounded-circle' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                  <div className='mask'>
                    <div className='bottom-0 d-flex align-items-end h-100 text-center justify-content-center'>
                      <div>
                        <p className='fw-bold text-white mb-4'>UX/UI</p>
                      </div>
                    </div>
                  </div>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg='1' md='12' className='mb-4 mb-md-0'>
                <MDBRipple
                  rippleColor='light'
                  className='bg-image hover-overlay shadow-1-strong rounded'
                >
                  <img src='src/assets/team_lr.jpg' className='w-100 rounded-circle' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                  <div className='mask'>
                    <div className='bottom-0 d-flex align-items-end h-100 text-center justify-content-center'>
                      <div>
                        <p className='fw-bold text-white mb-4'>Front</p>
                      </div>
                    </div>
                  </div>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg='1' md='12' className='mb-4 mb-md-0'>
                <MDBRipple
                  rippleColor='light'
                  className='bg-image hover-overlay shadow-1-strong rounded'
                >
                  <img src='src/assets/team_kb.jpg' className='w-100 rounded-circle' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                  <div className='mask'>
                    <div className='bottom-0 d-flex align-items-end h-100 text-center justify-content-center'>
                      <div>
                        <p className='fw-bold text-white mb-4'>Front</p>
                      </div>
                    </div>
                  </div>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg='1' md='12' className='mb-4 mb-md-0'>
                <MDBRipple
                  rippleColor='light'
                  className='bg-image hover-overlay shadow-1-strong rounded'
                >
                  <img src='src/assets/team_fq.jpg' className='w-100 rounded-circle' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                  <div className='mask'>
                    <div className='bottom-0 d-flex align-items-end h-100 text-center justify-content-center'>
                      <div>
                        <p className='fw-bold text-white mb-4'>Front</p>
                      </div>
                    </div>
                  </div>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg='1' md='12' className='mb-4 mb-md-0'>
                <MDBRipple
                  rippleColor='light'
                  className='bg-image hover-overlay shadow-1-strong rounded'
                >
                  <img src='src/assets/team_pg.jpg' className='w-100 rounded-circle' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                  <div className='mask'>
                    <div className='bottom-0 d-flex align-items-end h-100 text-center justify-content-center'>
                      <div>
                        <p className='fw-bold text-white mb-4'>Back</p>
                      </div>
                    </div>
                  </div>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg='1' md='12' className='mb-4 mb-md-0'>
                <MDBRipple
                  rippleColor='light'
                  className='bg-image hover-overlay shadow-1-strong rounded'
                >
                  <img src='src/assets/team_mb2.jpg' className='w-100 rounded-circle' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                  <div className='mask'>
                    <div className='bottom-0 d-flex align-items-end h-100 text-center justify-content-center'>
                      <div>
                        <p className='fw-bold text-white mb-4'>Back</p>
                      </div>
                    </div>
                  </div>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg='1' md='12' className='mb-4 mb-md-0'>
                <MDBRipple
                  rippleColor='light'
                  className='bg-image hover-overlay shadow-1-strong rounded'
                >
                  <img src='src/assets/team_vb.jpg' className='w-100 rounded-circle' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                  <div className='mask'>
                    <div className='bottom-0 d-flex align-items-end h-100 text-center justify-content-center'>
                      <div>
                        <p className='fw-bold text-white mb-4'>Tester</p>
                      </div>
                    </div>
                  </div>
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