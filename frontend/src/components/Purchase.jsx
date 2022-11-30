import React from 'react'
import '../styles/purchase.css'
import Navbar from './Navbar'
import tasa from '../assets/taza.png'
import { Link } from 'react-router-dom'
const Purchase = () => {
  return (
    <div className='purchase'>
      <Navbar />
      <div className='purchase-global'>
        <div className='purchase-global-left'>
          <h1 className='purchase-global-title'>Carrito de Compras</h1>

        </div>
        <div className='purchase-box'>
          <h1 className='purchase-box-title'>Detalle de Productos</h1>
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
              <button>Eliminar product</button>
            </div>
          </div>
          <div className='purchase-total'>

            <div className='purchase-total-text'>
              <span> Tus Puntos:   </span>
              <span> Puntos a Canjear</span>
              <span> Puntos Restantes</span>
            </div>
            <div className='purchase-total-number'>
              <span> 3200</span>
              <span> -400</span>
              <span> 2800</span>
            </div>

          </div>
          <div className='purchase-btn'>
            <Link to="/Products">

              <button className='purchase-btn1'> <span>  + </span>  CANJEAR MAS PRODUCTOS</button>
            </Link>
            <button className='purchase-btn2'> FINALIZAR PEDIDO</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Purchase