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
const ProductCart = ({product}) => {

     const handleClick = () =>{
       const URL ="http://localhost:3001/delete"

       let currentUser = req.body.user;
       let currentOrder = req.body.order;
       let currentOrderDetail = req.body.orderDetail;
       let currentOrderDetailQ = req.body.orderDetail.quantity;
       let currentOrderDetailP = req.body.orderDetail.price;
       let currentOrderItem_q = req.body.order.item_q;
       let currentOrderAmmount = req.body.order.ammount;
      const data ={
           user:""


      }

      axios.delete(URL,data)
      .then(res => console.log(res-data))
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