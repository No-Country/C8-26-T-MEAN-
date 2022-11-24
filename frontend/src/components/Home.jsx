import React from 'react'
import Login from './Login'
import Navbar from './Navbar'
import CarouselOfi from './CarouselOfi'

import '../styles/categories.css'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Home = () => {
   return (
      <div>
         <Navbar />
         <CarouselOfi />
         <MDBRow>
            <MDBCol lg='2' md='2' className='mb-4 hover-zoom'>
               <img
                  src='https://ik.imagekit.io/tjlqeq3ql/GiftClub/cat_ahorros_MEHpj6nSw.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669183663025&tr=w-1080%2Ch-1080%2Cfo-auto'
                  className='img-fluid rounded-circle'
                  alt=''
               />
               <a href='#' class="a-product">AHORROS</a>
            </MDBCol>
            <MDBCol lg='2' md='2' className='mb-4 hover-zoom'>
               <img
                  src='https://ik.imagekit.io/tjlqeq3ql/GiftClub/cat_mascotas_wIOBENrOB.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669183663640&tr=w-1080%2Ch-1080%2Cfo-auto'
                  className='img-fluid rounded-circle'
                  alt=''
               />
               <a href='#' class="a-product">  MASCOTAS  </a>
            </MDBCol>
            <MDBCol lg='2' md='2' className='mb-4 hover-zoom'>
               <img
                  src='https://ik.imagekit.io/tjlqeq3ql/GiftClub/cat_indumentaria_4MoyOkYJj.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669183663544&tr=w-1080%2Ch-1080%2Cfo-auto'
                  className='img-fluid rounded-circle'
                  alt=''
               />
               <a href='#' class="a-product">INDUMENTARIA</a>
            </MDBCol>
            <MDBCol lg='2' md='2' className='mb-4 hover-zoom'>
               <img
                  src='https://ik.imagekit.io/tjlqeq3ql/GiftClub/cat_tecnologia_lF-oWDL1Z.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669183663418&tr=w-1080%2Ch-1080%2Cfo-auto'
                  className='img-fluid rounded-circle'
                  alt=''
               />
               <a href='#' class="a-product">TECNOLOGÍA</a>
            </MDBCol>
         </MDBRow>
      </div>
   );
}

export default Home