import React from 'react'
import logo from '../assets/logo.png'
import '../styles/gift.css'
import { Link } from 'react-router-dom'
import { MDBIcon } from 'mdb-react-ui-kit';
import Navbar from './Navbar'

const Gift = () => {
  return (
    <div>
 <Navbar/>
      <Link to='/' className='arrow'><MDBIcon fas icon="angle-double-left" />
      </Link>
      <div className='gift'>
        <img src={logo} alt="logo" class="img-gift"/>
        <div className='text'>
          <h1 class="tex-canjea2">¿QUÉ ES GIFT CLUB?</h1>
          <p class="">Es un programa gratuito de beneficios que permite acumular puntos para ser canjeados por premios dentro de un amplio catálogo. Este programa de fidelización permite sumar puntos cada vez que se realizan consumos con tarjeta de débito y crédito, según los siguientes criterios:
            Tarjetas de Débito: 1 punto por cada 5 $/u$s.
            Tarjetas de Crédito: 1 punto por cada 8 $/u$s.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Gift