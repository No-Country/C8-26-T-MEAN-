import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/detailProduct.css'
const DetailCard = ({product}) => {

  return (
    <div className='detail--product'>
          <div className='detail--product-img'>
             <img
                src={product.image_url}
                alt=''
                />
          </div>
         <div className='detail--product-text'>
            <h3>{product.product_name} </h3>
            <p>{product.short_description}</p>
            <h4>{product.price}</h4>
            <Link  to ="/Purchase">
            Canjear
            </Link>
         </div>
    </div>
  )
}

export default DetailCard