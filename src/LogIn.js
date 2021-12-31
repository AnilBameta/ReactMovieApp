import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Form,Button} from 'react-bootstrap';
import {Link,useHistory} from 'react-router-dom';
export default function LogIn() {
const history = useHistory()
const [user,setUser] = useState();
const [passwrd,setPasswrd] = useState();

useEffect(()=> {
   if(localStorage.getItem('user-info'))
   {
     history.pushState('/')
   }
},[]);


function Submit() {
//  let flag = apiData?.data?.filter((val)=> {
//    if(val.UserName.localeCompare(user)===0 && val.Password.localeCompare(passwrd)===0)
//    {
//      return 1;
//    }
//    else {
//     return 0;
//    }
   
//  } 
// )
// console.log(flag)
// if(flag.length===0) {
//   alert("Wrong Username or Password")
// }
// else {
//   alert(" You have succesfully logged In")
// }



axios.post(("http://localhost:4000/api/user"),
   {
    "UserName": user, 
    "Password": passwrd, 
   })
   .then(response=> {
     localStorage.setItem(response)
   })
   .catch(err=> {
     console.log(err)
   })
   history.pushState('/')
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
