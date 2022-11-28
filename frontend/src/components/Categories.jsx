import React from 'react'
import Navbar from './Navbar'
import '../styles/categories.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Categorie from './Categorie';
import { MDBRow} from 'mdb-react-ui-kit';
const Categories = () => {
  const [categories, setCategories] = useState()
  useEffect(() => {
    const url = "http://localhost:3001/categories"
    axios.get(url)
      .then(res => setCategories(res.data.data))
      .catch(e => { console.log(e) })
  }, [])

  // console.log(categories)
  return (
    <div>
      <Navbar />
      <h1 class="tex-canjea">Canjeá tus puntos acumulados en el catálogo</h1>
      <div className='container'>
        <MDBRow>
          {
            categories?.map(categorie => (
              <Categorie props={categorie} key={categorie.id} />
            ))
          }
        </MDBRow>
      </div>

      { /**
         *  <MDBRow>
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
      */

      }


    </div>
  );
}

export default Categories