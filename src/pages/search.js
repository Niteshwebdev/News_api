import React, { useState } from 'react';
import {Button, FormControl,Form} from 'react-bootstrap';
import { Container, Row, Col,} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Header from '../component/Header';
const Search = ({result}) => {
    

    return (
        <div>
        
      

       <Container fluid >
        <Row xs={1} md={3} className='g-1'>
         
        
           
           {result.map((value,i)=>{
                  return(
                    <>
                     <Col key={1} className='container-fluid mt-4'>
                     <Card>
            <Card.Img variant="top" src={value.imageUrl} width="100%" height="300px"/>
            <Card.Body>
              <Card.Title>{value.title}</Card.Title>
              <Card.Text>
                 {value.content}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
          <small className="text-muted">{value.date}, {value.time}</small>
        </Card.Footer>
          </Card>  
          </Col>
                    </>
                  )
           })}
       
        </Row>
      </Container> 


        </div>
    );
}

export default Search;
