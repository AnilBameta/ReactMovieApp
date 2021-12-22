import axios from "axios"
import React,{ useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import './index.css';
export default function Cast() {
    const {id}=useParams()
    const [person,setPerson]=useState()
    useEffect(()=> {
       axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=a317e6da10782e752d8c1bdd83ddaff6&language=en-US`)
       .then((response)=>
       {
        setPerson(response.data)
       })
       .catch(err =>{
           console.log(err)
       })
    },[id])
    console.log(person)
    return(
        <div className="Cast">
        <img src={"https://image.tmdb.org/t/p/w500"+person?.profile_path} alt="Not available" className="images" ></img>
        <h2>Biography</h2>
        <p>{person?.biography}</p>
        <h2>Birthday</h2>
        <p>{person?.birthday}</p>
        </div>
    )
}
