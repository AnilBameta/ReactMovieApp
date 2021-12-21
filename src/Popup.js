import React ,{useState,useEffect} from 'react';
import axios from 'axios';
export default function Popup({match}) {
    const idValue=match.params.id
    console.log(idValue)
    let [idData, setIdData] = useState();
    useEffect(()=>
    {
       axios.get(`https://api.themoviedb.org/3/movie/${idValue}?api_key=a317e6da10782e752d8c1bdd83ddaff6`)
        .then((response)=>{
            setIdData(response.data);
        })
        .catch((err)=> {
        console.log(err)
        });
    },[idValue])
    console.log(idData)
    return(
        <h1>{idData?.original_title}</h1>
    )
}