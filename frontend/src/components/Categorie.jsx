import React from 'react'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import '../styles/categories.css'
const Categorie = ({ props }) => {
  return (
    <MDBCol lg='2' md='2' className='mb-4 hover-zoom'>
      <Link to='/Products' >
        <img
          src={props.image_url}
          className='img-fluid rounded-circle img_categ'
          alt=''
        />
      </Link>
      <a className='a-product'><Link to='/Products' >{props.name}</Link></a>
    </MDBCol>
  )
}

export default Categorie