import React from 'react'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/product.css'
const Product = ({props}) => {

  const navigate =useNavigate() 
  const handleClick=()=>{
    navigate(`/DetailProduct/${props.id}`);
  }
  return (
    <MDBCol lg='3' md='2' className='mb-4 hover-zoom'>
    <article   onClick={handleClick} >
       <div className='Product-square'>

           <h3 class="tex-product">{props.product_name} </h3>
            <img
              src={props.image_url}
              className='img-fluid rounded-circle'
              alt=''
              />
           
            <p className='puntos-producto'>{props.price} Puntos</p>
       </div>
    </article>
   </MDBCol>
  )
}

export default Product