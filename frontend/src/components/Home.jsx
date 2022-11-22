import React from 'react'
import Login from './Login'
import Navbar from './Navbar'
import CarouselOfi from './CarouselOfi'

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