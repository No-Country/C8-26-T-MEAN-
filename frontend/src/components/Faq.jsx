import React from 'react'
import logo from '../assets/logo.png'
import '../Styles/gift.css'
const Faq = () => {
  return (
   
    <div className='gift'>
    <img src={logo}alt="logo" />
     <div className='text'>
     <h1>PREGUNTAS FRECUENTES</h1>
        <div className='faq-text'>
        <p className='faq-p'>Qué tarjetas participan?</p>
        <span className='faq-span'> Las tarjetas Visa Débito, Visa Crédito, Maestro, Mastercard Crédito, American Express Crédito.</span>
        </div>

        <div className='faq-text'>
        <p className='faq-p'>  Dónde puedo consultar mis puntos?</p>
        <span className='faq-span'> Podrás consultar tus puntos desde GITF CLUB ingresando con tu usuario y contraseña.</span>
        </div>

        <div className='faq-text'>
        <p className='faq-p'> Cómo puedo canjear mis puntos?</p>
        <span className='faq-span'>
        Al acceder al catálogo de productos, podrás elegir el que quieras adquirir y con tan sólo un click en CANJEAR, te direccionará al carrito de compras para que puedas obtenerlo.
        </span>
        </div>
      
      </div>
    </div>
   
  )
}

export default Faq