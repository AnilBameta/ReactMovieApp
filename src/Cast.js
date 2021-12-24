import axios from "axios"
import React,{ useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import './index.css';
import {Grid} from '@mui/material';
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
        <>
        <Grid container className="CastPhoto">
        <Grid item xs={12} md={4} xl={4}  >
        <img src={"https://image.tmdb.org/t/p/w500"+person?.profile_path} alt="Not available" className="SingleImage" ></img>
        </Grid>
        <Grid item xs={12} md={8} xl={8}>
            <br />
            <h1>{person?.name}</h1>
         <h2>Biography</h2>
         <p>{person?.biography}</p>
        </Grid>
        </Grid>
      </>
    )
}
