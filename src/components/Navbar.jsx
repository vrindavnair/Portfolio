import React from 'react'
import "./Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';


function BasicExample() {
  return (
     <div className="container">
      <div className="row">
        <div className="col-md-12 nav1">
        <Navbar expand="lg" className="bg-body-tertiary" >
      <Container  className='nav'>
        <Navbar.Brand href="#home" id='a1' >Vrinda..</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/body' id='home' style={{marginLeft:'60px', color:'red'}}>Home</Link>
            <Link to="/about" id='about' style={{marginLeft:'100px',color:'red'}}>About</Link>
            <Link to="/contactas" id='contact'style={{marginLeft:'100px',color:'red'}}>Contact</Link>
            <Link to="/myprojects" id='project'style={{marginLeft:'100px',color:'red'}}>Projects</Link>
            <Link to="/edu" id='edu'style={{marginLeft:'100px',color:'red'}}>Education</Link>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </div>
        <Outlet/>
      </div>
      </div>
  

    
  );
}

export default BasicExample;