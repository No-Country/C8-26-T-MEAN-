import React from 'react'
import Login from './Login'
import Navbar from './Navbar'
import CarouselOfi from './CarouselOfi'
import Categories from './Categories'

import '../styles/categories.css'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Home = () => {
   return (
      <div>
         <Navbar />
         <CarouselOfi />
         <Categories />
         {/* <MDBRow>
            <MDBCol lg='2' md='2' className='mb-4 hover-zoom'>
               <img
                  src='https://wallpapercave.com/wp/wp7304269.jpg'
                  className='img-fluid rounded-circle'
                  alt=''
               />
               <a href='#/Products' class="a-product">AHORROS</a>
            </MDBCol>
            <MDBCol lg='2' md='2' className='mb-4 hover-zoom'>
               <img
                  src='https://wallpapercave.com/wp/wp7304269.jpg'
                  className='img-fluid rounded-circle'
                  alt=''
               />
               <a href='#/Products' class="a-product">  MASCOTAS  </a>
            </MDBCol>
            <MDBCol lg='2' md='2' className='mb-4 hover-zoom'>
               <img
                  src='https://wallpapercave.com/wp/wp7304269.jpg'
                  className='img-fluid rounded-circle'
                  alt=''
               />
               <a href='#/Products' class="a-product">INDUMENTARIA</a>
            </MDBCol>
            <MDBCol lg='2' md='2' className='mb-4 hover-zoom'>
               <img
                  src='https://wallpapercave.com/wp/wp7304269.jpg'
                  className='img-fluid rounded-circle'
                  alt=''
               />
               <a href='#/Products' class="a-product">TECNOLOGÍA</a>
            </MDBCol>
         </MDBRow> */}
         <Login/>
      </div>
   );
}

export default Home