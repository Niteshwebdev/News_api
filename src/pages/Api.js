import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import Card from 'react-bootstrap/Card';

import { Container, Row, Col,} from 'react-bootstrap';
import Header from '../component/Header';
import ReactLoading from "react-loading"

const Api = ({ props }) => {
    
    const [loading, setloading]=useState(true)
    const [print, setdata]=useState([])
    const nation=()=>{
        fetch(`https://inshortsapi.vercel.app/news?category=${props}`)
        .then((res)=>res.json())
        .then((pr)=>{
            setdata(pr.data)
            console.log(pr)
            setloading(false)
        })
    }

      useEffect(()=>{
           nation();
           const interval=setInterval(() => {
               nation(); 
           },10000);
           return ()=>clearInterval(interval);
      },[props])

      if(loading){
        return(
            <>
            <ReactLoading type="spin" color="#0000FF"
      height={100} width={50} />
            </>
        )
      }

    return (
        <div>
                      <Header/>
           <Container fluid >
        <Row xs={1} md={3} className='g-1'>
         
           
           {print.map((value,i)=>{
                  return(
                    <>
                     <Col className='container-fluid mt-4'>
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

export default Api;
