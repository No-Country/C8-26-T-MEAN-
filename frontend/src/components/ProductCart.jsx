import React from 'react'
import '../styles/purchase.css'
import {
  MDBBtn
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { setValueProduct } from '../store/slices/products.slice'
import { useDispatch, useSelector } from 'react-redux';

const ProductCart = ({ product, setDeleteProduct, deleteProduct }) => {
  const user = useSelector(state => state.user)
  const cant = useSelector(state => state.product)
  // console.log(product,"unidad")


  const dispatch = useDispatch()
  const handleClick = () => {
    const URL = "http://localhost:3001/delete"

    const data = {
      user: user,
      orderDetail: {
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      },
      order: {
        id: product.Order.id,
        item_q: product.Order.items_q,
        ammount: product.Order.ammount,
      }
    }
    axios.post(URL, data)
      .then(res => {
        setDeleteProduct(!deleteProduct)
        //dispatch(getUserThunk(user))
        dispatch(setValueProduct({ cant: cant.cant - product.quantity }))

      })
      .catch(e => console.log(e))

  }
  console.log(product)
  return (
    <div className='purchase-product'>
      <div className='purchase-img'>
        <img src={product.Product.image_url} alt="" />
      </div>
      <div >
        <h3 className='purchase-name-product'>{product.Product.product_name}</h3>
        <p className='points-prod'>{product.Product.price} puntos por unidad.<br />
          Subtotal : {product.price} puntos.<br /></p>
        <p className='p-cantidad-responsive'>CANTIDAD: {product.quantity}</p>
        <button className='btn-eliminar-prod-responsive' onClick={handleClick}>QUITAR PRODUCTO</button>
      </div>
      <div className='purchase-product-change'>
        <p className='p-cantidad'>CANTIDAD: {product.quantity}</p>

        <MDBBtn rounded className="col-12 mb-2 btn-eliminar-prod" onClick={handleClick} >ELIMINAR PRODUCTO</MDBBtn>
      </div>
    </div>
  )
}

export default ProductCart