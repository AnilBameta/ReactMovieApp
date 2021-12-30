import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Form,Button} from 'react-bootstrap';
export default function LogIn() {
const [apiData,getApiData] = useState();
const [user,setUser] = useState();
const [passwrd,setPasswrd] = useState();

useEffect(()=> {
   axios.get("http://localhost:4000/api/user")
   .then(response=> {
     getApiData(response)
   })
   .catch(err=> {
     console.log(err)
   })
},[]);
console.log(apiData);
let flag=[];
function Submit() {
 flag = apiData?.data?.map(val=> {
   if(val.UserName.localeCompare(user)===0 && val.Password.localeCompare(passwrd)===0)
   {
     return 1;
   }
   else {
    return 0;
   }
   
 } 
)
if(flag.includes(1)) {
  alert("You have succesfully logged In")
}
else {
  alert("Wrong Username or Password")
}
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
