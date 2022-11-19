
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Products = () => {
    const [products, setProducts] = useState({})

        useEffect(() => {
            const url ="https://127.0.0.1:3000/products/"
            axios.get(url)
            .then( res => console.log(res.data))
            .catch(e=>console.log(e))
        }, [])
    
        console.log(products)
    return (
        <section  className='Products'>
            <h1>Products</h1>
        </section>
    )
}

export default Products