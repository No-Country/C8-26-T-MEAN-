import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import '../styles/gift.css'

const Product = (props) => {
  return (

        <MDBCol lg='3' md='2' className='mb-4 hover-zoom'>
            <img
              src={props.image_url}
              className='img-fluid rounded-circle'
              alt=''
            />
            <h3 class="tex-product">{props.product_name} </h3>
            <p>{props.short_description}</p>
            <h4>{props.price}</h4>
            <button>Ver</button><button>Canjear</button>
        </MDBCol>
  )
}

export default Product