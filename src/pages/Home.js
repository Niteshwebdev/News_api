import React, { useEffect, useState } from 'react';
import { CardGroup, Col, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import '../App.css';
import ReactLoading from 'react-loading'
import Header from '../component/Header';

const Home = () => {
  const [loading,setloading]=useState(true)
 
    const [top,settop]=useState([])

   
    const Top=()=>{
      
        fetch("https://inshorts.vercel.app/news/top")
        .then((res)=>res.json())
        .then((pr)=>{
            settop(pr.data.articles)
            console.log(pr.data.articles)
            setloading(false)
        })
    }
    
    useEffect(()=>{
        Top();
        const interval=setInterval(()=>{
          Top();
        },5000)   
        return ()=> clearInterval(interval)

     },[])
     if(loading){
      return(
        <>
          <ReactLoading type="spokes" color="#0000FF"
      height={100} width={50} />
        </>
      )
    
      
    }
    return (
   
        <div className='card-wrapper'>
           <Header/>
            <Row>
           <CardGroup className='card-wrapper'>
            {top.map((value,i)=>{
                 return(
                    <>
                    <Col xs={12} sm={6} md={4}>
                    <Card className='card'>
            <Card.Img variant="top" src={value.imageUrl} width="100%" height="350px"/>
            <Card.Body>
              <Card.Title>{value.title}</Card.Title>
              <Card.Text>
                 {value.content}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
          <small className="text-muted">{value.authorName}</small>
        </Card.Footer>
          </Card> 
          </Col>
                    </>
                 )
            })}
           </CardGroup>
           </Row>
          
        </div>
    );
}

export default Home;
