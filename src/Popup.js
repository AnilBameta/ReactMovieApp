import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams} from "react-router-dom";

export default function Popup() {
    const {id}= useParams();
    console.log({id})
    let [idData, setIdData] = useState();
    useEffect(()=>
    { 
       axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a317e6da10782e752d8c1bdd83ddaff6`)
        .then((response)=>{
            setIdData(response.data);
        })
        .catch((err)=> {
        console.log(err)
        });
    },[id])
    console.log(idData);
    return(
        <div className='Popup'>
            <div className='Popup1'>
            <img src={"https://image.tmdb.org/t/p/w500"+idData?.poster_path} alt="Not available" className="PopupImage" ></img>
           </div>
           <div className='Popup2'>
           <h1>{idData?.original_title}</h1>
           <h3>({idData?.release_date})</h3>
            <br />
           <h3>Overview</h3>
           <p>{idData?.overview}</p>
           <br />
           <h3>Popularity</h3>
           <p>{idData?.popularity}</p>
           </div>
        </div>
    )
}
