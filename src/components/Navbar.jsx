import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";


function BasicExample() {
  return (
    <>
     <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#" style={{fontFamily:'fantasy',fontWeight:'70px'}}>VRINDA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar">
        
        <Link to='/body' className='active' >Home</Link>
        <Link to="/about" className='active' >About</Link>
        <Link to="/contactas"  className='active' >Contact</Link>
        <Link to="/myprojects"  className='active' >Projects</Link>
        <Link to="/edu" className='active' >Education</Link>
          
        
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      <Outlet/>
      
    </>
  );
}
export default BasicExample;
{/* <ul>
             
              

              </li>
              </ul> */}

