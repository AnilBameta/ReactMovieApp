import React from "react"
import './index.css';
import axios from 'axios';

export default function Search() {
    
        let [data, setData] = React.useState("");
        let [ans, SetAns] = React.useState("");
      
        function getName(event) {
              SetAns(event.target.value) 
        }
    
       React.useEffect(()=>
    {
       axios.get('https://api.themoviedb.org/3/movie/550?api_key=a317e6da10782e752d8c1bdd83ddaff6&query=Fight+Club')
        .then((response)=>{
            console.log(response);
        })
        .catch((err)=> {
        console.log(err)
        });
    },[ans])
    console.log(ans)
    return (
        <>
        <div className="heading">
        <h1>Movies/Tv App</h1>
        <input type ="text" placeholder="Enter the movie name" id="movie"></input>
        <button onClick= {getName}>Search</button>
        </div>
        <div className="container">
        {data?.spoken_languages?.map((el) => (
          <div>
            <h1> {el.original_title} </h1>
          </div>
        ))}
      </div>
    </>
  );
    }