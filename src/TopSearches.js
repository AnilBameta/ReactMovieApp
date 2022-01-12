import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function TSearches() {

    const [datas, setData] = useState()
    const [genreData, setGenreData] = useState()



    useEffect(() => {
        axios.get('https://shrouded-sierra-75095.herokuapp.com/api/mostMovie')
            .then(response => {
                setData(response.data)
            })
            .catch(err => err)
    }, [])
    console.log(datas)


    useEffect(() => {
        axios.get(`https://shrouded-sierra-75095.herokuapp.com/api/genreWise`)
            .then(res => setGenreData(res.data))
            .catch(err => err)
    }, [])
    console.log(genreData)


    console.log(genreData);
    return (
        <>
            <h1>Most Searched Movie is</h1>
               {
                datas?.map((item) =>
                <>
                    <h1>{item?._id}</h1>
                    <h1>{item?.count}</h1>
                </>
                )
               }
                
            
            <button>Get genre wise Count</button>
            {
                genreData?.map((item) =>
                    <div>
                        <h1>{item.Genre}</h1>
                        <h2>{item.Movie}</h2>
                        <h3>{item.Count}</h3>
                    </div>
                )
            }
        </>
    )
        }
        