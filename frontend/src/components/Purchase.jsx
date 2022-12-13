import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { setValueProduct } from '../store/slices/products.slice'
import { getUserThunk ,setValue} from '../store/slices/users.slice'
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
  const [compra, setCompra] = useState(0)
  const [total, setTotal] = useState(0)
  const user = useSelector(state => state.user)
  const canti = useSelector(state => state.product)
  const dispatch = useDispatch();
  useEffect(() => {
    //let URL = "http://localhost:3001/cart/2"
    if (user !== "") {
      URL = `http://localhost:3001/cart/${user.id}`
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setProducts(res.data.products)
        const cant = res.data.products.length
        
        // console.log(cant)
        if(cant){
          setCompra(res.data.products[0].Order.ammount)
          setTotal(user.points-res.data.products[0].Order.ammount)
        }else{
          setCompra(0)
          setTotal(0)

        }
       // let canti=res.data.Order.items_q 
       // dispatch(setValueProduct({  canti}))
      })
      .catch(e => console.log(e))
    }
      
  }, [deleteProduct, purchase])

  const navigate =useNavigate()
  const handleClick = () =>{
    let URL ="http://localhost:3001/checkout"
    //console.log("usuario",user)
    if(user){
      axios.post(URL,{
        user:{
          id:user.id,
          orderPoints:compra,
          points:user.points
        }
      })
      .then(res =>{
        
          //console.log(res.data)
          setPurchase(!purchase)
          dispatch(setValue({
            points:total,
            id:user.id,
            address:user.address,
            email:user.email,
            image:user.image,
            name:user.name,
            orderSales:0,
            role:user.role,
            
          }))
          toggleShow()
          notifySuccess() 
          sessionStorage.setItem('usuario', JSON.stringify({
            points:total,
            id:user.id,
            address:user.address,
            email:user.email,
            image:user.image,
            name:user.name,
            orderSales:0,
            role:user.role,
          
          }));
          dispatch(setValueProduct({cant:0}))
          navigate('/')
     //  dispatch(setValueProduct({cant}))
      })
      .catch(e =>{
        console.log(e)
        setPurchase(!purchase) 
        toggleShow()
        notifyError("error")
      })
    }else{
      console.log("error al comprar")
    }
  }


  //Para el modal:
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => {
     if(compra){
       setBasicModal(!basicModal);
     }else{
      notifyError("Carrito Vacio")
     }
  }


  const notifySuccess = () => toast("¡Felicidades! tus puntos fueron canjeados con exito ")
  const notifyError = (e) => toast(`Error al al realizar la Compra: ${e}`)

  return (
    <div className='purchase'>
      <Navbar />

      <div className='purchase-global'>
        <div className='purchase-global-left'>
          <h2 className='purchase-global-title'>CARRITO DE CANJE</h2>

        </div>
        <div className='purchase-box'>
          <h3 className='purchase-box-title'>DETALLE DE PRODUCTOS</h3>
          <div>
            {
              products.map(product => (
                <ProductCart product={product} setDeleteProduct={setDeleteProduct} deleteProduct={deleteProduct} key={product.id} />
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
              <span>{user.points} </span>
              <span> {compra} </span>
              <span> {total}</span>
            </div>

          </div>
          <div className='purchase-btn'>
            <Link to="/Products">
              <button className='purchase-btn1'> <span>+</span>  CANJEAR MÁS PRODUCTOS</button>
            </Link>
            <button className='purchase-btn2' onClick={toggleShow}> FINALIZAR PEDIDO</button>
          </div>
          <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>¡Confirmacion!</MDBModalTitle>
                  <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                 Los Puntos seran canjeados por un total de:  

                  <div className='purchase-total-text-msg' >
                    
                     <span    >
                      {compra} Puntos
                     </span>
                  </div>
                  Te enviaremos un correo electrónico a tu e-mail para darte mayor información  para la entrega de los productos seleccionados.
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color='dark' onClick={handleClick}>ACEPTAR</MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </div>
      </div>
      <Footer />

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

export default Purchase