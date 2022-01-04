import React,{ useState, useEffect} from 'react'
import './index.css';
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';
export default function Search() {
  const {txt}= useParams();
  console.log(txt)
        let [data, setData] = useState();
        let [text,setText]=useState("");
        let [ans,setAns]=useState(txt);
        
        function textFun(event) {
          setText(event.target.value)
        }
       function btnClick() {
         setAns(text)
         try{
          let user=JSON.parse(window.localStorage.getItem('user'));
          let username = user.data.UserName;
         axios.post('http://localhost:4000/api/watchlist',
         {
           "UserName":username,
           "Movie":ans
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
       axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a317e6da10782e752d8c1bdd83ddaff6&query=${ans}`)
        .then((response)=>{
            setData(response.data);
        })
        .catch((err)=> {
        console.log(err)
        });
    },[ans])
    console.log(data)

    return (
        <div className='wholeBody'>
        <div className="heading">
        <h1 className="appName">Movies/Tv App</h1>
        <input type ="text" placeholder="Enter the movie name" onChange={textFun} className="textBox"></input>
        <button onClick={btnClick} className="searchBtn">Search</button>
        </div>
        <div className="body">
          {
           data?.results?.map((item)=>
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
