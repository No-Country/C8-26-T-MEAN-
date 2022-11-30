import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/detailProduct.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import {useSelector} from 'react-redux'

const DetailCard = ({ product }) => {

  const user=useSelector(state =>state.user)
 
 const notifySuccess = () => toast("Agregado al Carrito");
 const notifyError = () => toast("NO tiene los puntos necesarios para Canjear el Producto");
 

const handleClick =()=>{
   const url='http://localhost:3001/guardar';
    const data={
      user:{
          id:user.id,
          email:user.email,
          name:user.name,
          orderPoints:user.orderPoints,
          points:user.points,
          role:user.role,
          address:user.address
      },
       product:{
         id:product.id,
         points:product.price
       }

    }
    axios.post(url, data)
    .then(res =>{
      res.data
    })
    .catch(e=>console.log(e))
}
  return (
    <div className='detail--product d-flex'>
      <div className='detail--product-img'>
        <img
          src={product.image_url}
          alt=''
        />
      </div>
      <div className='detail--product-text'>
        <h3 className='nombre-product'>{product.product_name} </h3>
        <p>{product.short_description} <br />Descripción: {product.long_description} <br />Lo puedes canjear por: {product.price} puntos.
        </p>
        <Link to="/Purchase">
          <MDBBtn rounded className='mx-2 btn-canjear' color='secondary' onClick={handleClick} >CANJEAR</MDBBtn>
        </Link>
      </div>
      <ToastContainer 
		position="top-center"
		autoClose={1000}
		hideProgressBar
		newestOnTop={false}
		closeOnClick ={false}
		rtl={false}
		pauseOnFocusLoss
		draggable
		pauseOnHover
		theme="dark"
		  />
    </div>
  )
}

export default DetailCard