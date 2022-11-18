import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/navbar.css'

function Navbar() {
  // const [showNavCentred, setShowNavCentred] = useState(true);

//   return (
//     <MDBNavbar expand='lg' light bgColor='light'>
//       <MDBContainer fluid>
//         <MDBNavbarToggler
//           type='button'
//           data-target='#navbarCenteredExample'
//           aria-controls='navbarCenteredExample'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//           onClick={() => setShowNavCentred(!showNavCentred)}
//         >
//           <MDBIcon icon='bars' fas />
//         </MDBNavbarToggler>

//         <MDBCollapse navbar show={showNavCentred} center id='navbarCenteredExample'>
//           <MDBNavbarNav fullWidth={false} className='mb-5 mb-lg-0 p-5 b-5'>

//             <MDBNavbarItem>
//               <MDBNavbarLink active aria-current='page'><Link to ='/' >CATALOGO </Link></MDBNavbarLink>
//             </MDBNavbarItem>

//             <MDBNavbarItem>
//               <MDBNavbarLink  ><Link to ='/Gift' >QUE ES GIFT CLUB? </Link></MDBNavbarLink>
//             </MDBNavbarItem>

//             <MDBNavbarItem>
//               <MDBNavbarLink  > <Link to ='/Faq' >QUE ES GIFT CLUB? </Link></MDBNavbarLink>
//             </MDBNavbarItem>

//             <MDBNavbarItem>
//               <MDBNavbarLink  > <Link to ='/Products' >PRODUCTOS!!</Link></MDBNavbarLink>
//             </MDBNavbarItem>
//           </MDBNavbarNav>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
// )}



  return (
    <div id="menuBackground">
      <div id="menuContainer">
        <label for="show-menu" className="show-menu">Mostrar menú</label>
        <input type="checkbox" id="show-menu" role="button" />
        <ul id="menu">
          <li><a><Link to ='/' >CATALOGO </Link></a></li>
          <li><a><Link to ='/Gift' >QUE ES GIFT CLUB?</Link></a></li>
          <li><a><Link to ='/Faq' >PREGUNTAS FRECUENTES</Link></a></li>
        </ul>
      </div>
    </div>

  );
}
export default Navbar