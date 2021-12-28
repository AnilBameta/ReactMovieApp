import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams, Link} from "react-router-dom";
import './index.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
export default function Popup() {
    const {id}= useParams();
    console.log({id})
    let [idData, setIdData] = useState();
    let [caste,setCaste]= useState();
    useEffect(()=>
    { 
       axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a317e6da10782e752d8c1bdd83ddaff6`)
        .then((response)=>{
            setIdData(response.data);
        })
        .catch((err)=> {
        console.log(err)
        });
    },[id])
    useEffect(()=>
    {
       axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=a317e6da10782e752d8c1bdd83ddaff6&language=en-US`)
       .then((response)=>{
         setCaste(response.data)
       })
       .catch((err)=> {
           console.log(err)
       })
    },[id])
    console.log(caste);
    console.log(idData);
    
        
    const castPeople=caste?.cast?.slice(0, 5).map((item) => 
    
     <div>  
          <Link to={`/Cast/${item.id}`} style={{textDecoration:'none'}}>
    <Card sx={{ maxWidth:300, maxHeight:300}}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="250"
          image={`https://image.tmdb.org/t/p/w500${item?.profile_path}`}
          alt="Not Available"
        />
        <CardContent >
          <Typography gutterBottom variant="h8" component="div" width='150px' height='10px'>
          {item.original_name}
          </Typography>
          <Typography variant="body2" color="text.secondary" width='150px'>
          {item.character}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                </Link> 
     </div>
               )
              
    return(
        <>
        <div className='Popup' /*</>style={{background: `url(https://image.tmdb.org/t/p/w500${idData?.backdrop_path})`, backgroundSize:'cover'}}*/>
            <div className='Popup1'>
            <img src={"https://image.tmdb.org/t/p/w500"+idData?.poster_path} alt="Not available" className="PopupImage" ></img>
           </div>
           <div className='Popup2'>
           <h1>{idData?.original_title}</h1>
           <h3>({idData?.release_date})</h3>
           <h2 style={{color:'grey'}}>{idData?.tagline}</h2>
            <br />
           <h3>Overview</h3>
           <p>{idData?.overview}</p>
           <br />
           <h3>Popularity</h3>
           <p>{idData?.popularity}</p>
           <br />
           <h3>Runtime</h3>
           <p>{idData?.runtime} min.</p>
           </div>  
        </div>
        <div>
        <h3>Cast</h3>
     <h6 className='CastName'>{castPeople}</h6>
      </div> 
      
      </> 
    )
}