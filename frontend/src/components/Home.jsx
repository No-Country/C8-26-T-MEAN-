import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Login from './Login'
import Navbar from './Navbar'
import CarouselOfi from './CarouselOfi'
import Categorie from './Categorie'
import Footer from './Footer';
import '../styles/categories.css'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { setValue} from '../store/slices/users.slice'


const Home = () => {
 
   const [categories, setCategories] = useState()
   useEffect(() => {
      const url = "http://localhost:3001/categories"
      axios.get(url)
         .then(res => {
            setCategories(res.data.data)
     
         })
         .catch(e => { console.log(e) })
   }, [])

   return (
      <div>
         <Navbar />
         <CarouselOfi />
         <div className='container d-flex'>
            <MDBRow className='d-flex justify-content-center'>
               {
                  categories?.map(categorie => (
                     <Categorie props={categorie} key={categorie.id} />
                  ))
               }
            </MDBRow>
         </div>
         <Footer />
      </div>
   );
}

export default Home