import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';


function RestReview({review}) {
    console.log(review);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
        REVIEW
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Review</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            
         {review?.map(i=>(
             <ListGroup variant="flush">
             <ListGroup.Item className='text-info'>{i.name}</ListGroup.Item>
             <ListGroup.Item>{i.date}</ListGroup.Item>
             <ListGroup.Item>{i.comments}</ListGroup.Item>
             <ListGroup.Item className='text-warning'>{i.rating} <i class="fa-solid fa-star"></i></ListGroup.Item>
             <ListGroup.Item className='text-center text-primary fw-bold '>--------------------------</ListGroup.Item>
           </ListGroup>

         ))
         }
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default RestReview