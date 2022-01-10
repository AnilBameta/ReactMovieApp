import React,{ useEffect,useState} from 'react';
import axios from 'axios';
export default function TSearches(){

    const [data,setData] = useState()
    const [genreData,setGenreData] =useState()
    const [txtValue,setTxtValue] = useState()
    const [btnClk,setBtnClk] = useState()

    function set(e) {
        setBtnClk(e.target.value)
    }
    function btn() {
     setTxtValue(btnClk)
    }

    useEffect(()=> {
        axios.get('https://shrouded-sierra-75095.herokuapp.com/api/movieCount')
        .then(response => {
          setData(response.data)
        })
        .catch(err => err)
    },[])
    console.log(genreData)

    useEffect(()=> {
        axios.get(`https://shrouded-sierra-75095.herokuapp.com/api/genrewiseCount&query=${txtValue}`)
        .then(res => setGenreData(res))
        .catch(err => err)
    },[txtValue])


    console.log(data);
    return(
        <>
        <h1>Most Searched Movie is</h1>
        <h2>data</h2>
        <h1>Please enter the genre </h1>
        <input type="textbox" onChange={set}></input>
        <button onClick={btn}>Search</button>
        </>
    )
}