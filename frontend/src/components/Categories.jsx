import React from 'react'
import Navbar from './Navbar'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import '../styles/categories.css'

const Categories = () => {

  return (
    <div>
      <Navbar />
      <h1 class="tex-canjea">Canjeá tus puntos acumulados en el catálogo</h1>
      <p class="mb-4">¡Canjeá tus puntos por momentos felices!</p>
      <MDBRow>
        <MDBCol lg='2' md='2' className='mb-4 hover-zoom'>
          <img
            src='https://wallpapercave.com/wp/wp7304269.jpg'
            className='img-fluid rounded-circle'
            alt=''
          />
          <a href='#' class="a-product">AHORROS</a>
        </MDBCol>
        <MDBCol lg='2' md='2' className='mb-4 hover-zoom'>
          <img
            src='https://wallpapercave.com/wp/wp7304269.jpg'
            className='img-fluid rounded-circle'
            alt=''
          />
          <a href='#' class="a-product">BEBÉS</a>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Categories