import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import '../styles/gift.css'
import Product from './Product';

const Products = () => {
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
      <div>
        <Navbar />
        <h1 class="tex-canjea">Canjeá tus puntos acumulados en el catálogo</h1>
        <p class="mb-4">¡Canjeá tus puntos por momentos felices!</p>
        <MDBRow>
        {
            products.map (product => {
              return <Product props={product} key={product.id}/>
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
              src='https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-de-argentina-adidas-oficial-messi-10-blanca-100020fs6565010-1.jpg'
              className='img-fluid rounded-circle'
              alt=''
            />
            <h3 class="tex-product">CAMISETA DE ARGENTINA </h3>
            <p>ADIDAS OFICIAL MESSI 10 BLANCA</p>
            <h4>8.000 PUNTOS</h4>
          </MDBCol>

          <MDBCol lg='3' md='2' className='mb-4 hover-zoom'>
            <img
              src='https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/e/pelota-de-futbol-adidas-al-rihla-league-numero-5-blanca-100040h57791001-1.jpg'
              className='img-fluid rounded-circle'
              alt=''
            />
            <h3 class="tex-product">PELOTA DE FUTBOL</h3>
            <p>ADIDAS AL RIHLA LEAGUE NUMERO 5 BLANCA</p>
            <h4>3.000 PUNTOS</h4>
          </MDBCol>

          <MDBCol lg='3' md='2' className='mb-4 hover-zoom'>
            <img
              src='https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/e/pelota-de-boca-mini-adidas-azul-100040gl4477001-1.jpg'
              className='img-fluid rounded-circle'
              alt=''
            />
            <h3 class="tex-product">PELOTA DE BOCA</h3>
            <p>tiene un centro de espuma para que no tengas que inflarla nunca.</p>
            <h4>3.000 PUNTOS</h4>
          </MDBCol>

          <MDBCol lg='3' md='2' className='mb-4 hover-zoom'>
            <img
              src='https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/e/pelota-de-futbol-mini-adidas-river-plate-n-1-blanca-100040fs6616001-1.jpg'
              className='img-fluid rounded-circle'
              alt=''
            />
            <h3 class="tex-product">PELOTA DE FUTBOL </h3>
            <p>RIVER PLATE NUMERO 1 BLANCA</p>
            <h4>3.000 PUNTOS</h4>
          </MDBCol>

          <MDBCol lg='3' md='2' className='mb-4 hover-zoom'>
            <img
              src='https://www.cetrogar.com.ar/media/catalog/product/6/6/6603b_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:'
              className='img-fluid rounded-circle'
              alt=''
            />
            <h3 class="tex-product">CAFETERA PRIMA LATTE OSTER</h3>
            <p>
              Tipo de producto	Cafeteras express.
              Origen	China.</p>
            <h4>4.000 PUNTOS</h4>

          </MDBCol>

          <MDBCol lg='3' md='2' className='mb-4 hover-zoom'>
            <img
              src='https://www.cetrogar.com.ar/media/catalog/product/h/e/het-601i_02_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:'
              className='img-fluid rounded-circle'
              alt=''
            />
            <h3 class="tex-product">HORNO ELECTRICO</h3>
            <p>¿Qué incluye?
              Pinza para extracción, rejilla, bandeja para migas, bandeja para hornear</p>
            <h4>3.500 PUNTOS</h4>

          </MDBCol>

          <MDBCol lg='3' md='2' className='mb-4 hover-zoom'>
            <img
              src='https://www.cetrogar.com.ar/media/catalog/product/p/r/progrill-400_01.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:'
              className='img-fluid rounded-circle'
              alt=''
            />
            <h3 class="tex-product">PARRILLA ELECTRICA</h3>
            <p>Control de temperatura ajustable. Bandeja de grasa integrada.</p>
            <h4>8.000 PUNTOS</h4>

          </MDBCol>

          <MDBCol lg='3' md='2' className='mb-4 hover-zoom'>
            <img
              src='https://www.cetrogar.com.ar/media/catalog/product/6/k/6kg_-_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:'
              className='img-fluid rounded-circle'
              alt=''
            />
            <h3 class="tex-product">LAVAROPAS</h3>
            <p>Centrifugado:Sí.
              Carga	Frontal.
              Clase	A+.
              Programa:15</p>
            <h4>15.000 PUNTOS</h4>

          </MDBCol>

          <MDBCol lg='3' md='2' className='mb-4 hover-zoom'>
            <img
              src='https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-atomik-keops-mujer-negra-2120130627810c0-1.jpg'
              className='img-fluid rounded-circle'
              alt=''
            />
            <h3 class="tex-product">ZAPATILLAS ATOMIK KEOPS</h3>
            <p>liviandad, diseño y comodidad.
              Resistentes e ideales para tiempo libre.</p>
            <h4>1.500 PUNTOS</h4>

          </MDBCol>

          <MDBCol lg='3' md='2' className='mb-4 hover-zoom'>
            <img
              src='https://http2.mlstatic.com/D_NQ_NP_2X_678897-MLA52334193409_112022-F.webp'
              className='img-fluid rounded-circle'
              alt=''
            />
            <h3 class="tex-product">KIT CUIDADO BEBÉ</h3>
            <p>Contiene: tijera, cepillo, lima, corta uña, termometro, aspirador nasal, cepillo de dientes.</p>
            <h4>2.000 PUNTOS</h4>

          </MDBCol>

          <MDBCol lg='3' md='2' className='mb-4 hover-zoom'>
            <img
              src='https://www.cetrogar.com.ar/media/catalog/product/h/r/hr7301-90_01_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:'
              className='img-fluid rounded-circle'
              alt=''
            />
            <h3 class="tex-product">PROCESADORA</h3>
            <p>Accesorios: Cuchilla en S, jarra de 2 litros, disco para cortar en rodajas y disco para cortar en tiras.</p>
            <h4>1.500 PUNTOS</h4>

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
      </div>
    </section>
  )
}

export default Products