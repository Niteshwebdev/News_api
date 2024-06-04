import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import { Navbar,Container,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Header.css';
import { Dropdown } from 'react-bootstrap'
import {Button, FormControl,Form} from 'react-bootstrap';
import Search from '../pages/search';

const Header = () => {
  
  const [search,setsearch]=useState("");
  const [result, setresult]=useState([])

  const sea =(e)=>{
     e.preventDefault();
     console.log(search)
    
     try{
          fetch(`https://inshortsapi.vercel.app/news?category=${search}`)
         .then((res)=>res.json())
         .then((ress)=>{
            
             setresult(ress.data)
         })
     }
     catch(err)
     {
         console.log(err)
     }


  }


    return (
        <>

<ul class="nav-links">
    <li><Link to="/">Trending</Link></li>
    <li class="center"><Link to="/national">National</Link></li>
    <li class="upward"><Link to="/business">Bussiness</Link></li>
    <li class="forward"><Link to="/sport">Sports</Link></li>
    <Dropdown >
    <Dropdown.Toggle  variant="secondary" id="dropdown-basic" style={{marginLeft:"10px"}}>
                            More
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item><Link to="/world">World</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/politics">Politics</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/technology">technology</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/startup">Startup</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/entertainment">entertainment</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/miscellaneous">miscellaneous</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/Unconventional">Unconventional</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/science">Science</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/Automobile">Automobile</Link></Dropdown.Item>

                            {/* Add more Dropdown.Items as needed */}
                        </Dropdown.Menu>
                        
                        
                        </Dropdown>
                        <Form className="d-flex"  onSubmit={sea}>
        <FormControl 
          type="text"
          placeholder="Search"
          className="me-2"
          value={search}
          onChange={(e)=>setsearch(e.target.value)}
          
        />
        <Button variant="outline-primary" type="submit">Search</Button>
      </Form>  
     
  </ul>

   {result.length > 0 && <Search result={result} />} 

  
        


         {/* <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Top</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/National"> National</Link>
             
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>   */}


        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/National">National</Link>
          </li>
          
        </ul>
      */}





         
    
  
       
        
      </>
    );
}

export default Header;
