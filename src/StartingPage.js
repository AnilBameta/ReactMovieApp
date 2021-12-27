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
        <>
        <div className="heading">
        <h1 className="appName">Movies/Tv App</h1>
        <input type ="text" placeholder="Enter the movie name" onChange={textFun} className="textBox"></input>
        <Link to={`/Search/${txt}`}><button className="searchBtn">Search</button></Link>
        </div>    
        <div className="body">
          {
           firstData?.results?.map((item)=>
             <div className="movies">
           <Link to={`/Popup/${item.id}`}><img src={"https://image.tmdb.org/t/p/w500"+item.poster_path} alt="Not available" className="images" key={item.id}></img></Link>
            <br />
            <div className="titleName">{item.title}</div>
            {item.release_date}
            </div>
           )
          }
        </div>
        </>
    )
}
