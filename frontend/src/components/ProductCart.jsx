import React from 'react'
import '../styles/purchase.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}  from 'mdb-react-ui-kit';
import axios from 'axios';
import {getUserThunk} from '../store/slices/users.slice'
import { useDispatch, useSelector } from 'react-redux';
const ProductCart = ({product,setDeleteProduct}) => {
  const user = useSelector(state => state.user)
    // console.log(product,"unidad")


    const dispatch=useDispatch()
     const handleClick = () =>{
       const URL ="http://localhost:3001/delete"

       const data ={
           user:user,
           orderDetail:{
               id:product.id,
               quantity:product.quantity,
               price:product.price,
           },
           order:{
             id:product.Order.id,
            item_q:product.Order.items_q,
            ammount:product.Order.ammount,
           }
      }
      axios.post(URL,data)
      .then(res => {
        setDeleteProduct(true)
        dispatch(getUserThunk(user))
       
      })
      .catch(e =>console.log(e))
      
     }
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

      <MDBBtn className="col-12 mb-2"  onClick={handleClick} >DELETE PRODUCT</MDBBtn>
    </div>
  </div>
  )
}

export default ProductCart