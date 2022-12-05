import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import '../styles/detailProduct.css'
import 'react-toastify/dist/ReactToastify.css';
import {
  MDBBtn,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';



const DetailCard = ({ product }) => {
  const navigate = useNavigate()
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const notifySuccess = () => toast("Agregado al Carrito")
  const notifyError = (e) => toast(`Error al adicionar al carrito: ${e}`)


  const handleClick = () => {
    const url = 'http://localhost:3001/agregar';
    const data = {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        orderPoints: user.orderPoints,
        points: user.points,
        role: user.role,
        address: user.address || "dasdasd"
      },
      product: {
        id: product.id,
        points: product.price
      }
    }
    axios.post(url, data)
      .then(res => {
        // const cant =
        // dispatch(setValueProduct({cant}))
        console.log(res.data)
        notifySuccess()
        setTimeout(() => {
          console.log("Delayed for 1 second.");
          navigate("/Purchase")
        }, "1000")

      })
      .catch(e => {
        console.log(e)
        notifyError(e.response.data.message)
      })
  }
  return (
    <div className='detail--product d-flex justify-content-center'>

      <MDBCard style={{ maxWidth: '800px' }}>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage src={product.image_url} alt='Imagen del producto' fluid />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle className='nombre-product'>{product.product_name}</MDBCardTitle>
              <MDBCardText>
                {product.short_description} <br />Descripción: {product.long_description} <br />Lo puedes canjear por: {product.price} puntos.
              </MDBCardText>
              <MDBBtn rounded className='mx-2 btn-canjear' color='secondary' onClick={handleClick} >CANJEAR</MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
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