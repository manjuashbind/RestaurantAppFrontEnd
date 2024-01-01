import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Restcards({restaurants}) {
    console.log(restaurants);
  return (
    <div>
       <Link to={`view/${restaurants.id}`} style={{textDecoration:'none'}}>
       <MDBCard className='my-4 mx-auto' style={{height:'auto',maxWidth:'20rem'}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage className='img-fluid' style={{height:'300px'}} src={restaurants.photograph} height={'300px'} object-fit={'cover'} position='top'  alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody style={{height:'250px'}} className='d-flex flex-column justify-content-between '>
        <MDBCardTitle className='text-white'>{restaurants.name}</MDBCardTitle>
        <MDBCardText>
         {restaurants.address}
         <p>Cuisine : {restaurants.cuisine_type}</p>
        </MDBCardText>
        <MDBBtn href='#'>View</MDBBtn>
      </MDBCardBody>
    </MDBCard>
       </Link>
       
    </div>
  )
}

export default Restcards