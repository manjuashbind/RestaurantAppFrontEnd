import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
         <MDBNavbar  bgColor='black'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='' className='fs-3 text-warning'>
          <span className='mx-3 text-white'><i class="fa-solid fa-utensils"></i></span>
          FlavourFusion 
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

    </div>
  )
}

export default Header