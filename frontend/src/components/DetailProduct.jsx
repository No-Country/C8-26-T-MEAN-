
import Navbar from './Navbar'
import '../styles/categories.css'
import DetailCard from './DetailCard'
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
const DetailProduct = () => {
    const {id} =useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
       const url =`http://localhost:3001/products/${id}/`
       axios.get(url)
       .then(res =>setProduct(res.data.data))
       .catch(e=>console.log(e))
    }, [])
    console.log(product)
  return (
    <div>
       <Navbar />
        <h1>detail Products</h1>
        <DetailCard  product={product}/>
    </div>
   
  )
}

export default DetailProduct