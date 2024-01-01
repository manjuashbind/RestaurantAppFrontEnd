import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
        <MDBFooter className='text-center text-primary bg-black' >
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn  rippleColor="dark"     floating  size="lg"  className='text-primary m-1 p-0 bg-black'  href='#!'  role='button' >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
           
            floating
            size="lg"
            className='text-primary m-1 p-0 bg-black'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            
            floating
            size="lg"
            className='text-primary m-1 p-0 bg-black'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            
            floating
            size="lg"
            className='text-primary m-1 p-0 bg-black'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
           
            floating
            size="lg"
            className='text-primary m-1 p-0 bg-black'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            
            floating
            size="lg"
            className='text-primary m-1 p-0 bg-black'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3 bg-black' >
        © 2023 Copyright:
        <a className='text-dark' href='https://mdbootstrap.com/'>
          RestoCafe.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer