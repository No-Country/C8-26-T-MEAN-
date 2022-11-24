import React from 'react'
import '../styles/detailProduct.css'
const DetailCard = ({product}) => {

  return (
    <div className='detail--product'>
          <div className='detail--product-img'>
             <img
                src={product.image_url}
                alt=''
                />
          <div>
        </div>
         <div className='detail--product-text'>
            <h3>{product.product_name} </h3>
            <p>{product.short_description}</p>
            <h4>{product.price}</h4>
            <button>Canjear</button>
         </div>
        </div>
    </div>
  )
}

export default DetailCard