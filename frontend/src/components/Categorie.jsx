import React from 'react'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
const Categorie = ({name}) => {
  return (
    <MDBCol lg='2' md='2' className='mb-4 hover-zoom'>
        <Link to='/Products' >
    <img
      src='https://wallpapercave.com/wp/wp7304269.jpg'
      className='img-fluid rounded-circle'
      alt=''
      />
      </Link>
       <a><Link to='/Products' >{name}</Link></a>
  </MDBCol>
  )
}

export default Categorie