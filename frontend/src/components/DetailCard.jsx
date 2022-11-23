import React from 'react'
const DetailCard = ({product}) => {

  return (
    <div>
         <img
              src={product.image_url}
           //  className='img-fluid rounded-circle'
              alt=''
              />
            <h3 class="tex-product">{product.product_name} </h3>
            <p>{product.short_description}</p>
            <h4>{product.price}</h4>
            <button>Ver</button><button>Canjear</button>
    </div>
  )
}

export default DetailCard