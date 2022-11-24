import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'
import DetailCard from './DetailCard'
import '../styles/detailProduct.css'
import { MDBBtn } from 'mdb-react-ui-kit';

const DetailProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  useEffect(() => {
    const url = `http://localhost:3001/products/${id}/`
    axios.get(url)
      .then(res => setProduct(res.data.data))
      .catch(e => console.log(e))
  }, [])
  console.log(product)
  return (
    <div>
      <Navbar />
      <Link to="/Categories">
        <MDBBtn rounded className='btn-categ-prod' color='dark'>CATEGORÍAS</MDBBtn>
      </Link>
      <DetailCard product={product} />
    </div >

  )
}

export default DetailProduct