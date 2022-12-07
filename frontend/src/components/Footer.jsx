import React from 'react';
import '../styles/footer.css'
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
        <div className='p-4 text-center text-white d-flex justify-content-center '>
          <section>
            <MDBRow className='d-flex justify-content-center img-team '>
              <p className='fw-bold'>NUESTRO EQUIPO:</p>
              <MDBCol lg='1' md='12' className='mb-4 mb-md-0'>
                <MDBRipple
                  rippleColor='light'
                  className='bg-image hover-overlay shadow-1-strong rounded'
                >
                  <img src='src/assets/team_ef.jpg' className='w-100 rounded-circle' />
                  <a href='https://www.linkedin.com/in/emilcefernandez'>
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
                  <img src='src/assets/team_kb.jpg' className='w-100 rounded-circle' />
                  <a href='(https://pe.linkedin.com/in/kimberllynbarrazat/es'>
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
                  <a href='https://www.linkedin.com/in/florencio-quelca-mamani-8741ba84/'>
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
                  <a href='https://www.linkedin.com/in/pablo-gianferro'>
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
                  <a href='http://linkedin.com/in/miguel-ernesto-bazzarelli-8b5029247'>
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
                  <a href='https://www.linkedin.com/in/valentin-banegas-27415b218/'>
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
        <div className='text-center p-3 fw-bold' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2022 | Un proyecto de:
          <a className='text-white fw-bold' href='https://github.com/No-Country/C8-26-T-MEAN-'> C8-26-T-MEAN</a>
        </div>
      </MDBFooter>

    </div>
  )
}

export default Footer