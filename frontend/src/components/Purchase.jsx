import React, { useState,useEffect }from 'react'
import Navbar from './Navbar'
import tasa from '../assets/taza.png'
import { Link } from 'react-router-dom'
import '../styles/purchase.css'
import { MDBContainer } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import {getProductThunk, setValueProduct} from '../store/slices/products.slice'
const Purchase = () => {

 const [cart, setCart] = useState()

  const user = useSelector(state =>state.user)
	const dispatch = useDispatch();
  useEffect(() => {
    const URL =`http://localhost:3001/cart/${user.id}`
    axios.get(URL)
    .then(res =>{
      console.log(res.data)
      setCart(res.data)
      const cant =res.data.products.length
      console.log(cant)
      dispatch(setValueProduct({cant}))
    })
    .catch(e =>console.log(e))
  }, [])


  return (
    <div className='purchase'>
      <Navbar />
      <MDBContainer className='d-flex justify-content-center'>
        <div className='purchase-global'>
          <div className='purchase-global-left'>
            <h2 className='purchase-global-title'>Carrito de Compras</h2>

          </div>
          <div className='purchase-box'>
            <h3 className='purchase-box-title'>DETALLE DE PRODUCTOS</h3>
            <div className='purchase-product'>
              <div>
                <img src={tasa} alt="" />
              </div>
              <div >
                <h3 className='tex-product'>Taza mundialista</h3>
                <p>400 Puntos</p>
                <p>Subtotal : 400 puntos</p>
              </div>
              <div className='purchase-product-change'>
                <p>CANTIDAD</p>
                <select name="" id=""> 1
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
                <button>Eliminar producto</button>
              </div>
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
      </MDBContainer>
    </div>
  )
}

export default Purchase