import React,{ useEffect,useState} from 'react';
import axios from 'axios';
export default function TSearches(){

    const [data,setData] = useState()
    const [genreData,setGenreData] =useState()

   

    useEffect(()=> {
        axios.get('https://shrouded-sierra-75095.herokuapp.com/api/movieCount')
        .then(response => {
          setData(response.data)
        })
        .catch(err => err)
    },[])
    console.log(data)

    useEffect(()=> {
        axios.get(`https://shrouded-sierra-75095.herokuapp.com/api/genrewiseCount`)
        .then(res => setGenreData(res))
        .catch(err => err)
    },[genreData])


    console.log(genreData);
    return(
        <>
        <h1>Most Searched Movie is</h1>
        <h2>{data[data.length]?.name}</h2>
        <button>Get genre wise Count</button>
        <h2>{genreData}</h2>
        </>
    )
}