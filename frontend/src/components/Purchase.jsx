import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setValueProduct } from '../store/slices/products.slice'
import Navbar from './Navbar'
import ProductCart from './ProductCart'
import Footer from './Footer';
import '../styles/purchase.css'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

const Purchase = () => {
  const [products, setProducts] = useState([])
  const [deleteProduct, setDeleteProduct] = useState(false)
  const [purchase, setPurchase] = useState(false)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  useEffect(() => {
    let URL = "http://localhost:3001/cart/2"
    if (user !== "") {
      URL = `http://localhost:3001/cart/${user.id}`
    }
    axios.get(URL)
      .then(res => {
        setProducts(res.data.products)
        const cant = res.data.products.length
        // console.log(cant)
        dispatch(setValueProduct({ cant }))
      })
      .catch(e => console.log(e))
  }, [deleteProduct, purchase])

  /*
  const handleClick = () =>{
    let URL ="http://localhost:3001/checkout"
    if(user){
      axios.post(URL,{user})
      .then(res =>{
        
       console.log(res.data)
          setPurchase(true)
     //  dispatch(setValueProduct({cant}))
      })
      .catch(e =>{
        console.log(e)
        setPurchase(false) 
      })
    }else{
      console.log("error al comprar")
    }
  }
  */

  //Para el modal:
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);


  return (
    <div className='purchase'>
      <Navbar />

      <div className='purchase-global'>
        <div className='purchase-global-left'>
          <h2 className='purchase-global-title'>Carrito de Compras</h2>

        </div>
        <div className='purchase-box'>
          <h3 className='purchase-box-title'>DETALLE DE PRODUCTOS</h3>
          <div>
            {
              products.map(product => (
                <ProductCart product={product} setDeleteProduct={setDeleteProduct} key={product.id} />
              ))
            }
          </div>
          <div className='purchase-total'>

            <div className='purchase-total-text'>
              <span> Tus puntos:   </span>
              <span> Puntos a canjear:</span>
              <span> Puntos restantes:</span>
            </div>
            <div className='purchase-total-number'>
              <span> 3200</span>
              <span> -400</span>
              <span> 2800</span>
            </div>

          </div>
          <div className='purchase-btn'>
            <Link to="/Products">

              <button className='purchase-btn1'> <span>  + </span>  CANJEAR MÁS PRODUCTOS</button>
            </Link>
            <button className='purchase-btn2' onClick={toggleShow}> FINALIZAR PEDIDO</button>
          </div>
          <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>¡Felicidades!</MDBModalTitle>
                  <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                  Tus puntos fueron canjeados exitosamente con los siguientes productos:
                  Aquí los productos sean nombre y/o imágenes.
                  Te enviaremos un correo electrónico a tu e-mail para darte mayor información.
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color='dark' onClick={toggleShow}>CERRAR</MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Purchase