import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar'
import Categorie from './Categorie';
import '../styles/categories.css'
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
      <h1 className='tex-canjea'>Canjeá tus puntos acumulados en el catálogo</h1>
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

export default Categories