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
        <h1>{idData?.original_title}</h1>
    )
}
