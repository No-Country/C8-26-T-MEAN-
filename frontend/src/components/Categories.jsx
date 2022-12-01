import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar'
import Categorie from './Categorie';
import '../styles/categories.css'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
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
      <MDBContainer>
        <h2 className='tex-canjea d-flex justify-content-center'>Canjeá tus puntos acumulados en el catálogo</h2>
        <div className='container d-flex'>
          <MDBRow className='d-flex justify-content-center'>
            {
              categories?.map(categorie => (
                <Categorie props={categorie} key={categorie.id} />
              ))
            }
          </MDBRow>
        </div>
      </MDBContainer>
    </div>
  );
}

export default Categories