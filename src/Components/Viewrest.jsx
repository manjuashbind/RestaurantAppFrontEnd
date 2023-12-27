import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';



function Viewrest() {
    const [restDetails,setRestDetails]=useState({})
    // const paraId=useParams()  //to get id from link
    // console.log(paraId.id);
    //destructuring object in react
    const{id}=useParams()
    console.log(id);
    //Api cll to get details of particular restaurant using the path parameter
    const base_url='http://restaurantappbackend-q0qr.onrender.com/restaurants'
    const fetchRest=async()=>{
        const result=await axios.get(`${base_url}/${id}`)
        console.log(result.data);
        setRestDetails(result.data)
    }
    useEffect(()=>{
        fetchRest()
    },[])
console.log(restDetails);

  return (
    <div>
        <Row className='row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2'>
            <Col className=''>
            <img src={restDetails.photograph} alt="" className='img-fluid 'style={{width:'650px',height:'550px',objectFit:'cover'}} />
            </Col>
            <Col className='p-3 my-auto'>
            <div>
            <ListGroup>
              <h1 className='text-white'>{restDetails.name}</h1>
      <ListGroup.Item>Neighbourhood :{restDetails.neighborhood} </ListGroup.Item>
      <ListGroup.Item>Cuisine Type : {restDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Address: {restDetails.address}</ListGroup.Item>
      <ListGroup.Item><RestOp op={restDetails.operating_hours}/> </ListGroup.Item>
      <ListGroup.Item>Review <RestReview review={restDetails.reviews}/></ListGroup.Item>
    </ListGroup>
            </div> 
            </Col>
        </Row>
    </div>
  )
}

export default Viewrest