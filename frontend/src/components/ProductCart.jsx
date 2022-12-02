import React from 'react'
import '../styles/purchase.css'
const ProductCart = ({product}) => {
    console.log(product)
  return (
    <div className='purchase-product'>
    <div  className='purchase-img'>
      <img src={product.Product.image_url} alt="" />
    </div>
    <div >
      <h3 className='tex-product'>{product.Product.product_name}</h3>
      <p>{product.Product.price}</p>
      <p>Subtotal : {product.price}</p>
    </div>
    <div className='purchase-product-change'>
      <p>CANTIDAD: {product.quantity}</p>
      <select name="" id=""> 1
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
      </select>
      <button>Eliminar producto</button>
    </div>
  </div>
  )
}

export default ProductCart