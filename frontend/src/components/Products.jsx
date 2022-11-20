import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Products = () => {
    const [products, setProducts] = useState(null)
        useEffect(() => {
        const url ="http://localhost:3000/products"
         axios.get(url)
         .then( res => setProducts(res.data))
         .catch(e=>console.log(e, "entro"))
     }, [])
     
      console.log(products)
  return (
      <section  className='Products'>
          <h1>Products</h1>
      </section>
  )
}

export default Products