import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar'
import Categorie from './Categorie';
import Footer from './Footer';
import '../styles/categories.css'
import { MDBRow } from 'mdb-react-ui-kit';
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
      <div>
        <h2 className='tex-canjea d-flex justify-content-center'>Canjeá tus puntos acumulados con los productos de las diferentes categorías:</h2>
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
      <Footer />
    </div>
  );
}

export default Categories