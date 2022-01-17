import React,{ useEffect, useState} from 'react';
import axios from 'axios';
export default function TopSearches() {

    const [datas, setData] = useState()
    const [genreData, setGenreData] = useState(null)
    const [genre, setGenre] = useState()

  
    useEffect(() => {
        console.log("I am first useEffect")
        async function fetchData() {
       const g= await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=a317e6da10782e752d8c1bdd83ddaff6&language=en-US");
           setGenre(g.data)
           console.log(g.data)
        }
        fetchData()
    },[])



    useEffect(() => {
        async function fetchData() {
      const MM = await axios.get('https://shrouded-sierra-75095.herokuapp.com/api/mostMovie')
            setData(MM.data[0])
        }
        fetchData();
    },[])
    

useEffect(()=> {
    console.log("I am user")
    async function GV(){
        const ret= await  axios.post(`https://shrouded-sierra-75095.herokuapp.com/api/genreWiseCount`,
            {"Genre":'Action'}
            )
               
                setGenreData(ret.data[0])
         }
         GV()
},[])
console.log("I am Top Search")
    
   function genreValue(e) {
     
         async function GV(){
    const ret= await  axios.post(`https://shrouded-sierra-75095.herokuapp.com/api/genreWiseCount`,
        {"Genre":e.target.value||'Adventure'}
        )
            console.log("My return data is",ret)
            setGenreData(ret.data)
     }
     GV()
    }
 


   

  

let valuenext = <div>
  
<label for="genre">Choose a genre:</label>

<select name="genre" id="genre" onChange={genreValue}>
{genre?.genres?.map((item) => {
    return <option value={item?.name} >{item?.name}</option>
      }
  )} 
</select>
</div>
    


    return (
        <>
            <h1>Most Searched Movie is</h1>  
            <h2>{datas?._id}</h2> 
            <h2>{datas?.count}</h2>
            {valuenext}
            <h2>{genreData?.Movie}</h2>
            <h2>{genreData?.Count}</h2>
        </>
    )
}


// {aditya.map((item,key) => {
//     return <option key={key} value={item} />
//       }
//   )} 