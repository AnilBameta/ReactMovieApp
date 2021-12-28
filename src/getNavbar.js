import Navbar from 'react-bootstrap/Navbar';
import React, {useState} from 'react';
import { Container,Button,Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function GetNavbar() {
  const [log,getLog]=useState(false);
  function modal1() {
    <>
    {console.log("hello")}
    <Modal.Dialog>
    <Modal.Header closeButton>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
      <p>Modal body text goes here.</p>
    </Modal.Body>
  
    <Modal.Footer>
      <Button variant="secondary">Close</Button>
      <Button variant="primary">Save changes</Button>
    </Modal.Footer>
  </Modal.Dialog>
  </>
  }
  function modal2() {
    <Modal.Dialog>
    <Modal.Header closeButton>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
      <p>Modal body text goes here.</p>
    </Modal.Body>
  
    <Modal.Footer>
      <Button variant="secondary">Close</Button>
      <Button variant="primary">Save changes</Button>
    </Modal.Footer>
  </Modal.Dialog>
  }
  return (
<>
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      React Bootstrap
      </Navbar.Brand>
      <Button onClick={()=>modal1()} variant="outline-secondary">Log In</Button>{' '}
      <Button onClick={()=>modal2()} variant="outline-secondary">Sign Up</Button>{' '}
    </Container>
  </Navbar>
</>
  )
}


