import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function TSearches() {

    const [datas, setData] = useState()
    const [genreData, setGenreData] = useState()
    const [genre, setGenre] = useState()


    useEffect(() => {
        axios.get('https://shrouded-sierra-75095.herokuapp.com/api/mostMovie')
            .then(response => {
                setData(response.data)
            })
            .catch(err => err)
    }, [])
    console.log(datas)


    function genreValue(e) {
          console.log("My selected genre",e.target.value)
        axios.post(`https://shrouded-sierra-75095.herokuapp.com/api/genreWiseCount`,
        {"Genre":e.target.value}
        )
            .then(res => setGenreData(res.data))
            .catch(err => err)
    }
    console.log(genreData)

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=a317e6da10782e752d8c1bdd83ddaff6&language=en-US")
            .then(res => {
                setGenre(res.data)
            })
            .catch(err => err)
    }, [])


    console.log("My genre data is",genre)
    
  

let valuenext = <div>
    {/* <label >Choose your Genre from the list:</label>
        <input list="genre" onChange={genreValue}/>
        <dataList id="genre" >  
        {genre?.genres?.map((item) => 
        <option value={item?.name}  />
      
  
  )} 
        </dataList> */}


<label for="genre"><b>Choose a genre:</b></label>

<select name="genre" id="genre" onChange={genreValue}>
{genre?.genres?.map((item) => {
    return <option value={item?.name}>{item?.name}</option>
      }
  )} 
</select>
</div>
    
   
 
    return (
        <>
            <h2>Most Searched Movie is</h2>
            <h3>{datas[0]?._id}</h3>
            <h3>Count {datas[0]?.count}</h3>
           <>
           {valuenext}
           </> 
           <h3>{genreData[0]?.Movie}</h3>
           <h3>Count {genreData[0]?.Count}</h3>
        </>
    )
}


