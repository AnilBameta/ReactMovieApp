import React,{ useState, useEffect} from 'react'
import './index.css';
import axios from 'axios';
import Modal from 'react-modal';
export default function Search() {
    
        let [data, setData] = useState();
        let [text,setText]=useState("");
        let [ans,setAns]=useState("Ocean's Eight");
        let [modalIsOpen,setModalIsOpen]=useState(false);
        let [getTitle,setGetTitle]=useState();
        let [overview,setOverview]=useState();
        let [popularity,setPopularity]=useState();
        let [poster,setPoster]=useState();
        let [backdroppath,setBackdropPath]=useState();
        function textFun(event) {
          setText(event.target.value)
        }
       function btnClick() {
         setAns(text)
       }
       function imageInfo(getItem) {
        setModalIsOpen(true)
         setGetTitle(getItem.title)
         setOverview(getItem.overview)
         setPopularity(getItem.popularity)
         setPoster(getItem.poster_path)
         setBackdropPath(getItem.backdrop_path)
       }
        
       useEffect(()=>
    {
       axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a317e6da10782e752d8c1bdd83ddaff6&query=${ans}`)
        .then((response)=>{
            setData(response.data);
        })
        .catch((err)=> {
        console.log(err)
        });
    },[ans])
    console.log(data)
    return (
        <>
        <div className="heading">
        <h1 className="appName">Movies/Tv App</h1>
        <input type ="text" placeholder="Enter the movie name" onChange={textFun} className="textBox"></input>
        <button onClick={btnClick} className="searchBtn">Search</button>
        </div>
        <div className="body">
          {
           data?.results?.map((item)=>
             <div className="movies">
           <img src={"https://image.tmdb.org/t/p/w500"+item.poster_path} alt="Not available" className="images" onClick={()=>imageInfo(item)} ></img>
            <br />
            <div className="titleName">{item.title}</div>
            {item.release_date}
             <Modal isOpen={modalIsOpen} ariaHideApp={false} style={
               {
                 overlay: {
                   color:'black'  
                 },
                 content: {
                   color:'black',
                   textAlign:'center'
                     }
                }  
             }>
               <div className='Modal'>
                 <div className='Modal1'>
                 <img src={"https://image.tmdb.org/t/p/w500"+poster} alt="Not available" className='poster'></img>
                 </div>
                 <div className='Modal2'>
             <h1>{getTitle}</h1>
             <h2>{popularity}</h2>
             <h2>Overview</h2>
             <p>{overview}</p>
             <button onClick={()=> setModalIsOpen(false)}>Close</button>
             </div>
             </div>
            </Modal> 
            </div>
           )
          }
        </div>      
          
    </>
  )
    } 
