import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { MDBRow, MDBContainer } from 'mdb-react-ui-kit';
import Product from './Product';
import {  useSelector } from 'react-redux'

const Products = () => {

  const cate= useSelector(state => state.cate)
  const [products, setProducts] = useState([])
  useEffect(() => {
    const url = "http://localhost:3001/products"
    axios.get(url)
      .then(res => setProducts(res.data.data))
      .catch(e => console.log(e, "entro"))
  }, [])
  console.log(products);

  return (
    <section className='Products'>
      <Navbar />
      <MDBContainer className='d-flex'>
        <MDBRow className='d-flex justify-content-center'>
          {
            products.map(product => {
                 if(product.category_id==cate)
              return <Product props={product} key={product.id} />
            })
          }
          {/* <MDBCol lg='3' md='2' className='mb-4 hover-zoom'>
            <img
              src='https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-de-argentina-adidas-oficial-messi-10-blanca-100020fs6565010-1.jpg'
              className='img-fluid rounded-circle'
              alt=''
            />
            <h3 class="tex-product">abc </h3>
            <p>ADIDAS OFICIAL MESSI 10 BLANCA</p>
            <h4>8.000 PUNTOS</h4>
          </MDBCol>
          <MDBCol lg='3' md='2' className='mb-4 hover-zoom'>
            <img
              src='https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-entrenamiento-atomik-sigma-velcro-ni-o-ni-a-negra-21201307805a194-1.jpg'
              className='img-fluid rounded-circle'
              alt=''
            />
            <h3 class="tex-product">ZAPATILLAS NIÑO NIÑA NEGRA</h3>
            <p>Comodidad y estilo para tus entrenamientos con las nuevas ATOMIK Sigma.
              Cuenta con cordones elásticos y ajuste de velcro.</p>
            <h4>750 PUNTOS</h4>
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

export default Products