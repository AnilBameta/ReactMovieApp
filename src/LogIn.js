import axios from 'axios';
import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
export default function LogIn() {
const navigate = useNavigate();
const [user,setUser] = useState();
const [passwrd,setPasswrd] = useState();

// useEffect(()=> {
//    if(localStorage.getItem('user-info'))
//    {
//      history.pushState('/')
//    }
// },[]);


function Submit() {

axios.post(("http://localhost:4000/api/Login"),
   {
    "UserName": user, 
    "Password": passwrd, 
   })
   .then(response=> {
     localStorage.setItem("user",JSON.stringify(response))
     navigate('/')
   })
   .catch(err=> {
     console.log(err)
   })
  //  history.pushState('/')
}

    return (
  <div className='SignUp'>
     <h1 style={{textAlign:'center'}}>Log In</h1>
        <Form className=" formcss">
  <Form.Group className="mb-3" >
    <Form.Label style={{fontSize:'30px'}}><b>Username</b></Form.Label>
    <Form.Control placeholder="Enter username" onChange={(e)=>{setUser(e.target.value)}}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{fontSize:'30px'}}><b>Password</b></Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPasswrd(e.target.value)}/>
  </Form.Group>
  <Form.Text className="text-muted">
      We'll never share your details with anyone else.
    </Form.Text>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" onClick={Submit}>
    Submit
  </Button>
</Form>
</div>
    )
}
