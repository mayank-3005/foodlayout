import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SocialIcons from './SocialIcons';


function Header() {
  return (
    <div className='navbar-main'>
      <div className='navbar-left container-fluid p-0 m-0 border-bottom align-items-center align-items-md-end '>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='navbar-container'>
        <Navbar.Brand href="home">logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav text-white">
          <Nav className="me-auto ">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="
            Our Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bio Ethonol</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Bio Diesel
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bio Compressed Biogas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="link">
            Our Outlets</Nav.Link>
            <Nav.Link href="/ApplicationForm">
            Application Form</Nav.Link>
            <NavDropdown title="
            Useful links" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
          </Nav>
          <SocialIcons/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
      
      
     
      
      
      </div>
      
  
 
   
  );
}

export default Header;