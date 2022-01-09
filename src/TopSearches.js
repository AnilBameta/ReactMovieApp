import React,{ useEffect,useState} from 'react';
import axios from 'axios';
export default function TSearches(){

    const [data,setData] = useState()

    useEffect(()=> {
        axios.get('https://shrouded-sierra-75095.herokuapp.com/api/movieCount')
        .then(response => {
          setData(response.data)
        })
        .catch(err => err)
    })


    console.log(data);
    return(
        <h1>Hello</h1>
    )
}