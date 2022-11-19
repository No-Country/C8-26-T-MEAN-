import React from 'react'
import Login from './Login'
import Navbar from './Navbar'
import CarouselOfi from './CarouselOfi'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import '../styles/gift.css'


const Home = () => {
  return (
     <div>
        <Navbar/>
        <CarouselOfi/>
        <Login/>
     </div>
  );
}

export default Home