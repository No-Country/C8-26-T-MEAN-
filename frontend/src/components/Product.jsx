import React from 'react'
import { MDBCol } from 'mdb-react-ui-kit';
import {useNavigate } from 'react-router-dom';
import '../styles/product.css'
const Product = ({ props }) => {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/DetailProduct/${props.id}`);
  }
  return (
    <MDBCol lg='3' md='6' className='mb-4 hover-zoom'>
      <article onClick={handleClick} >
        <div className='Product-square'>

          <h3 className="tex-product">{props.product_name} </h3>
          <img
            src={props.image_url}
            className='img-fluid rounded-circle img-prod-responsive'
            alt=''
          />

          <p className='puntos-producto'>{props.price} Puntos</p>
        </div>
      </article>
    </MDBCol>
  )
}

export default Product