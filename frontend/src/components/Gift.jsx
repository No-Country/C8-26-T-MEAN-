import React from 'react'
import logo from '../assets/logo.png'
import Navbar from './Navbar'
import Footer from './Footer';
import '../styles/gift.css'
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

const Gift = () => {
  return (
    <div>
      <Navbar />
      <div className='gift d-flex justify-content-center'>
        <img src={logo} alt="logo" className="img-preg" />
        <MDBAccordion borderless initialActive={1}>
          <MDBAccordionItem collapseId={1} headerTitle='¿Qué es GiftClub?'>
            GiftClub es un sistema de puntos acumulables que pueden ser canjeados
            por cualquiera de los productos que se encuentran dentro del catálogo de este sitio.<br />
            Puedes sumar puntos cada vez que realizas consumos con tarjeta de débito o crédito, según los siguientes criterios:<br />
            Tarjetas de Débito: 1 punto por cada 5 $/u$s.<br />
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
      <Footer />
    </div>
  )
}

export default Gift