import React from 'react'
import logo from '../assets/logo.png'
import '../styles/gift.css'
import { MDBAccordion, MDBAccordionItem, MDBIcon } from 'mdb-react-ui-kit';
import Navbar from './Navbar'

const Gift = () => {
  return (
    <div>
      <Navbar />
      <div className='gift'>
        <img src={logo} alt="logo" class="img-preg" />
          <MDBAccordion borderless initialActive={1}>
            <MDBAccordionItem collapseId={1} headerTitle='¿Qué es GiftClub?'>
              Es un programa gratuito de beneficios que permite acumular puntos para ser canjeados por premios dentro de un amplio catálogo. Este programa de fidelización permite sumar puntos cada vez que se realizan consumos con tarjeta de débito y crédito, según los siguientes criterios:
              Tarjetas de Débito: 1 punto por cada 5 $/u$s.
              Tarjetas de Crédito: 1 punto por cada 8 $/u$s.
            </MDBAccordionItem>
            <MDBAccordionItem collapseId={2} headerTitle='¿Qué tarjetas participan?'>
              Las tarjetas Visa Débito, Visa Crédito, Maestro, Mastercard Crédito, American Express Crédito.
            </MDBAccordionItem>
            <MDBAccordionItem collapseId={3} headerTitle='¿Dónde puedo consultar mis puntos?'>
              Podrás consultar tus puntos desde GITF CLUB ingresando con tu usuario y contraseña.
            </MDBAccordionItem>
            <MDBAccordionItem collapseId={4} headerTitle='¿Cómo puedo canjear mis puntos?'>
              Al acceder al catálogo de productos, podrás elegir el que quieras adquirir y con tan sólo un click
              en CANJEAR, te direccionará al carrito de compras para que puedas obtenerlo.
            </MDBAccordionItem>
          </MDBAccordion>
      </div>
    </div>
  )
}

export default Gift