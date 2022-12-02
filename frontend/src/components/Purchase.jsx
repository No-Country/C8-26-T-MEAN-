import React, { useState,useEffect} from 'react'
import Navbar from './Navbar'
import ProductCart from './ProductCart'
import { Link } from 'react-router-dom'
import '../styles/purchase.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import {setValueProduct} from '../store/slices/products.slice'


const Purchase = () => {
  
 const [products, setProducts] = useState([])

  const user = useSelector(state =>state.user)
	const dispatch = useDispatch();
  useEffect(() => {
    let URL ="http://localhost:3001/cart/2"
    if(user!==""){
       URL =`http://localhost:3001/cart/${user.id}`
     }
    axios.get(URL)
    .then(res =>{
      setProducts(res.data.products)
      const cant =res.data.products.length
     // console.log(cant)
     dispatch(setValueProduct({cant}))
    })
    .catch(e =>console.log(e))
  }, [])
   console.log(products)

  return (
    <div className='purchase'>
      <Navbar />
    
        <div className='purchase-global'>
          <div className='purchase-global-left'>
            <h2 className='purchase-global-title'>Carrito de Compras</h2>

          </div>
          <div className='purchase-box'>
            <h3 className='purchase-box-title'>DETALLE DE PRODUCTOS</h3>
            <div>
            {
            products.map(product =>(
               <ProductCart  product={product} key={product.id}/>
            ))
            }   
            </div>
            <div className='purchase-total'>

              <div className='purchase-total-text'>
                <span> Tus puntos:   </span>
                <span> Puntos a canjear:</span>
                <span> Puntos restantes:</span>
              </div>
              <div className='purchase-total-number'>
                <span> 3200</span>
                <span> -400</span>
                <span> 2800</span>
              </div>

            </div>
            <div className='purchase-btn'>
              <Link to="/Products">

                <button className='purchase-btn1'> <span>  + </span>  CANJEAR MÁS PRODUCTOS</button>
              </Link>
              <button className='purchase-btn2'> FINALIZAR PEDIDO</button>
            </div>
          </div>

        </div>
    
    </div>
  )
}

export default Purchase