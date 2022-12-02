import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Login from './Login'
import Navbar from './Navbar'
import CarouselOfi from './CarouselOfi'
import Categorie from './Categorie'
import '../styles/categories.css'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Home = () => {

   const [categories, setCategories] = useState()
   useEffect(() => {
      const url = "http://localhost:3001/categories"
      axios.get(url)
         .then(res => setCategories(res.data.data))
         .catch(e => { console.log(e) })
   }, [])

   return (
      <div>
         <Navbar />
         <CarouselOfi />
       {
       /*<Login />*/
      } 
         
         <div className='container d-flex'>
            <MDBRow className='d-flex justify-content-center'>
               {
                  categories?.map(categorie => (
                     <Categorie props={categorie} key={categorie.id} />
                  ))
               }
            </MDBRow>
         </div>
      </div>
   );
}

export default Home