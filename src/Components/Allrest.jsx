import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Restcards from './Restcards'
import { MDBCarousel, MDBCarouselItem,MDBCarouselCaption } from 'mdb-react-ui-kit';
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'


function Allrest() {
//API fetching
const[AllRestData,setAllRestData]=useState([])
const base_url='https://restaurantappbackend-q0qr.onrender.com/restaurants'
const fetchData=async()=>{
  const result=await axios.get(base_url)
  console.log(result.data);
  setAllRestData(result.data)
}
console.log(AllRestData);

useEffect(()=>{fetchData()},[])

  return (
    <div className='m-0'>
      <Container className='py-4 px-0 '>
        <Row>
        <MDBCarousel showControls fade>
      <MDBCarouselItem itemId={1}  >
        <img src={img6} className='d-block w-100 img-fluid' style={{width:'100%',height:'500px',objectFit:'cover'}} alt='...' />
        <MDBCarouselCaption  >
          <div  className='py-3 rounded  bg-white bg-opacity-50  '>
          <h2  className='text-black  '>Uncover the finest dining experiences around.</h2>
          <h5 className='text-danger'>Where every bite tells a story worth savoring</h5>
          </div>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        
        <img  src={img4} className='d-block w-100 img-fluid' style={{width:'100%',height:'500px',objectFit:'cover'}} alt='...' />
        
        <MDBCarouselCaption>
        <div  className='py-3 rounded bg-white bg-opacity-50 '>
        <h2 className='text-black ' >Uncover the finest dining experiences around.</h2>
        <h5 className='text-danger'>Where every bite tells a story worth savoring</h5>
          </div>
        </MDBCarouselCaption>
        
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={img5} className='d-block w-100 img-fluid' style={{width:'100%',height:'500px',objectFit:'cover'}} alt='...' />
       
        <MDBCarouselCaption >
        <div  className='py-3 rounded bg-black bg-opacity-50'>
        <h2 className='text-white '>Uncover the finest dining experiences around.</h2>
        <h5 className='text-danger'>Where every bite tells a story worth savoring</h5>
          </div>
        </MDBCarouselCaption>
        
      </MDBCarouselItem>
    </MDBCarousel>
        </Row>
      </Container>
     <Container className='my-3'>
      <Row className='row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4'>
        {
          AllRestData.map(item=>(
            <Col>
           <Restcards restaurants={item}/>
            </Col>
          ))
        
       }
      </Row>
      </Container>
    </div>
  )
}

export default Allrest