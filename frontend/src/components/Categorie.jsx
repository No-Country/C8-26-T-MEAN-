import React from 'react'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
const Categorie = ({props}) => {
  return (
    <MDBCol lg='2' md='2' className='mb-4 hover-zoom'>
        <Link to='/Products' >
    <img
      src={props.image_url}
      className='img-fluid rounded-circle'
      alt=''
      />
      </Link>
       <a><Link to='/Products' >{props.name}</Link></a>
  </MDBCol>
  )
}

export default Categorie