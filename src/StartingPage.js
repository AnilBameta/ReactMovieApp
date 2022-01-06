import Navbar from 'react-bootstrap/Navbar';
import { Container,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useState, useEffect} from 'react'
import './index.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
export default function Starting() {
    let [firstData,setFirstData]=useState();
    let [txt,setText]=useState(null);
        
    function textFun(event) {
      setText(event.target.value)
    }
    function logOut() {
      localStorage.clear();
    }
    function searchMovie() {
      try{
        let user=JSON.parse(window.localStorage.getItem('user'));
        let username = user.data.UserName;
       axios.post('https://shrouded-sierra-75095.herokuapp.com/api/watchlist',
       {
         "UserName":username,
         "Movie":txt
       })
       .then(res => {
         console.log(res)
       })
       .catch(err => err)
      }
      catch(error)
      {
        console.log(error)
      }
    }
    useEffect(()=>
    {
       axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=a317e6da10782e752d8c1bdd83ddaff6&language=en-US&page=1`)
        .then((response)=>{
            setFirstData(response.data);
        })
        .catch((err)=> {
        console.log(err)
        });
    },[])
    console.log(firstData) 
    return (
        <div className="wholeBody">
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
      <Button variant="outline-secondary" style={{width:'90px'}} onClick={logOut}>Log Out</Button>{' '}
      <Link to={`/LogIn`}><Button variant="outline-secondary" style={{width:'90px'}}>Log In</Button>{' '}</Link>
     <Link to={`/SignUp`}> <Button variant="outline-secondary" style={{justifyContent:'right'}}>Sign Up</Button>{' '}</Link>
    </Container>
  </Navbar>

        <div className="heading">
        <h1 className="appName">Movies/Tv App</h1>
        <input type ="text" placeholder="Enter the movie name" onChange={textFun} className="textBox"></input>
        <Link to={`/Search/${txt}`}><button className="searchBtn" onClick={searchMovie}>Search</button></Link>
        </div>    
        <div className="body">
          {
           firstData?.results?.map((item)=>
             <div className="movies">
           <Link to={`/CastMembers/${item.id}`}><img src={"https://image.tmdb.org/t/p/w500"+item.poster_path} alt="Not available" className="images" key={item.id}></img></Link>
            <br />
            <div className="titleName">{item.title}</div>
            {item.release_date}
            </div>
           )
          }
        </div>
        </div>
    )

}



