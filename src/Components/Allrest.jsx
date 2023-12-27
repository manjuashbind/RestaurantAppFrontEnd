import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import Restcards from './Restcards'


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
    <div>
      <Row>
        {
          AllRestData.map(item=>(
            <Col sm={12} md={6} lg={4} xl={3}>
           <Restcards restaurants={item}/>
            </Col>
          ))
        
       }
      </Row>
    </div>
  )
}

export default Allrest