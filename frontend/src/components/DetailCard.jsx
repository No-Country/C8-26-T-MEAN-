import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/detailProduct.css'
import { MDBBtn } from 'mdb-react-ui-kit';

const DetailCard = ({ product }) => {

  return (
    <div className='detail--product d-flex'>
      <div className='detail--product-img'>
        <img
          src={product.image_url}
          alt=''
        />
      </div>
      <div className='detail--product-text'>
        <h3 className='nombre-product'>{product.product_name} </h3>
        <p>{product.short_description} <br />Descripción: {product.long_description} <br />Lo puedes canjear por: {product.price} puntos.
        </p>
        <Link to="/Purchase">
          <MDBBtn rounded className='mx-2 btn-canjear' color='secondary'>CANJEAR</MDBBtn>
        </Link>
      </div>
    </div>
  )
}

export default DetailCard