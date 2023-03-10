import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/3448/3448609.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            Taycan Restaurant
          </Navbar.Brand>
        </Container>
      </Navbar>
    
  )
}

export default Header