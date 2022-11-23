import React from 'react'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import '../styles/gift.css'
import { Link } from 'react-router-dom';
import '../styles/product.css'
const Product = ({props}) => {
  return (
    <MDBCol lg='3' md='2' className='mb-4 hover-zoom'>
    <Link  to='/DetailProduct/1' >
       <div className='Product-square'>

           <h3 class="tex-product">{props.product_name} </h3>
            <img
              src={props.image_url}
              className='img-fluid rounded-circle'
              alt=''
              />
           
            <h4>{props.price} Puntos</h4>
       </div>
    </Link>
   </MDBCol>
  )
}

export default Product