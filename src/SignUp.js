import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import axios from 'axios'

export default function SignUp() {
  const [userName,setUserName]= useState("");
  const [password,setPassword]= useState("");
  const [email,setEmail]= useState("");
  const [mobileNumber,setMobileNumber]= useState();
  function funcName(event) {
    setUserName(event.target.value);
  }
  function funcPassword (event) {
    setPassword(event.target.value);
  }
  function funcEmail (event) {
    setEmail(event.target.value);
  }
  function funcMobileNumber (event) {
    setMobileNumber(event.target.value);
  }



  const url= 'http://localhost:4000/api/user';
  function funcSubmit () {
   axios.post(url,{
     "UserName": userName, 
     "Password": password, 
     "MobileNumber": mobileNumber,
     "Email": email }
    ).then(res =>{
      console.log(res)
      alert("You have successfully Signed Up")
    }).catch((err)=>{
      alert("Please enter the right credentials")
    })
  }


    return (
  <div className='SignUp'>
     <h1 style={{textAlign:'center'}}>Sign Up</h1>
        <Form className=" formcss">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{fontSize:'30px'}}><b>Username</b></Form.Label>
    <Form.Control type='email' placeholder="Enter username" onChange={funcName}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{fontSize:'30px'}}><b>Password</b></Form.Label>
    <Form.Control type="password" placeholder="Enter Password" onChange={funcPassword}/>
  </Form.Group>
  <Form.Text className="text-muted">
      We'll never share your details with anyone else.
    </Form.Text>

  <Form.Group className="mb-3" >
    <Form.Label style={{fontSize:'30px'}}><b>MobileNumber</b></Form.Label>
    <Form.Control  placeholder="MobileNumber" onChange={funcMobileNumber}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox"> 
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label type="email" style={{fontSize:'30px'}}><b>Email</b></Form.Label>
    <Form.Control  placeholder="Email" onChange={funcEmail}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox"> 
  </Form.Group>

  <Form.Check type="checkbox" label="Check me out" />
 <Button variant="primary"  onClick={funcSubmit}>
    Submit
  </Button>
</Form>


</div>
    )
}