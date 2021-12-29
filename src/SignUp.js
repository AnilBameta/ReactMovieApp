import React from 'react';
import {Form,Button} from 'react-bootstrap';
export default function SignUp() {
    return (
  <div className='SignUp'>
     <h1 style={{textAlign:'center'}}>Sign Up</h1>
        <Form className=" formcss">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{fontSize:'30px'}}><b>Username</b></Form.Label>
    <Form.Control type="email" placeholder="Enter username" />
    <Form.Text className="text-muted">
      We'll never share your details with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{fontSize:'30px'}}><b>Password</b></Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox"> 
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{fontSize:'30px'}}><b>MobileNumber</b></Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox"> 
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{fontSize:'30px'}}><b>Email</b></Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox"> 
  </Form.Group>

  <Form.Check type="checkbox" label="Check me out" />
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>


</div>
    )
}