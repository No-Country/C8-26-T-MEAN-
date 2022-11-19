import React from 'react'

import Navbar from './Navbar'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import CarouselOfi from './CarouselOfi'
const Home = () => {
   return (
      <div>
         <Navbar/>
         <CarouselOfi/>     
      </div>
   )
}

export default Home