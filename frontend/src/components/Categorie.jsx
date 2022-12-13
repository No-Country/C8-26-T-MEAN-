import React from 'react'
import { MDBCol } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/categories.css'
import { useDispatch } from 'react-redux';
import { setValueCate} from '../store/slices/categoria.slice'
const Categorie = ({ props }) => {
  
  const navigate = useNavigate()
  const dispatch =useDispatch()
  const handleClick =() =>{  
    dispatch(setValueCate(props.id))
    navigate("/Products")
  }
  return (
    <MDBCol lg='2' md='2' className='mb-4 hover-zoom categ_item'>
      <div onClick={handleClick}>
      <div to='/Products' >
        <img
          src={props.image_url}
          className='img-fluid rounded-circle img_categ'
          alt=''
          />
      </div  >
      <a className='a-product'>{props.name}</a>
    </div>
    </MDBCol>
  )
}

export default Categorie