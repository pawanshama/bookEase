import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import '../Css/completeMovieCard.css'
import BsCxt from '../context/Bscontext'
let filteredData='';
const CompleteMovieCard = (props) => {
  const u = "data:image/jpeg;base64,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"
  const navigate = useNavigate();
  const context = useContext(BsCxt);
  const {movieList,city,movieName,url,token,setCompleteDataList} = context;
  console.log(movieName)
  console.log(movieList.length)
  console.log(filteredData.length)
  // if(!data){
  //   const handleFunc = async()=>{
  //      const r = await fetch(`http://localhost:8000/user/movie/get`)
  //   }
  // }
  if(filteredData.length===0 && movieList.length>0){
      filteredData = movieList.filter((prev)=> prev.movieName === movieName)[0]
      console.log(filteredData);
  }
    
  const handleBookingTheatres = async( ) => {
    try{

      const data = await fetch(`http://localhost:8000/movie/theatre?movieName=${movieName}&city=${city.toLowerCase()}`,{
        method:'GET',
        headers:{
          "Content-Type": "application/json", 
          "authorization": `${token}`
        }
      })
      const response = await data.json();
      setCompleteDataList(response.data)
      console.log(response.data)
    }catch(err){
      console.log("error occured",err)
    }
    navigate('/home/booking')
  }
  // const movieName = "WildLife"
  // const details = " Life starts with pain and ends with pain. Creatures leaving in cold region has to face many problems and this story tells you above the life exprience of a penguin tutu, who finds some secrets of antarctica and by himself creates a lovely creature of his own breed but story has some more twist when someone steals this mysterious thing from tutu and then tutu losts his love"

  return (
    <div>
         <div className='nav-section'>
          <div className='logo-section'>🎬logo</div>
            {/* <input placeholder='state Name...' className='input-section'/> */}
            <div>{filteredData.movieName}</div>
            <div className='location-section'>{city}</div>
            <div className='choose-location'>🛖</div>
         </div>
       <br/>{
           <>
         <div className='main-movie'>
          <div className='movie-card'>
            <div>
             <img src={url?url:u} alt='movie-image' className='image-section'/>
            </div>
          </div>
            
            <div style={{marginLeft:'1rem'}}>
              <div style={{fontSize:'xx-large',marginTop:'1rem',color:'yellow'}}>{filteredData.movieName}</div>
              <div style={{marginTop:'1rem',marginBottom:'0.5rem'}}>{filteredData.description}</div>
              <div style={{}}> <span style={{marginLeft:'0.1rem',fontSize:'larger',color:'yellow'}}>{filteredData.genre}</span></div>
              <button style={{backgroundColor:'red', fontSize:'large', borderRadius:'0.7rem',padding:'0.3rem', marginTop:'7rem',marginLeft:'2rem' }} onClick={handleBookingTheatres}> Book Ticket</button>
            </div> 
       </div>
       <br/>
        </>
      }
       {/* <div className='theatre-section'></div> */}

    </div>
  )
}

export default CompleteMovieCard
{/* <span style={{marginLeft:'0.1rem',fontSize:'larger',color:'yellow'}}>Mystry</span> <span style={{marginLeft:'0.1rem',fontSize:'larger',color:'yellow'}}>advanture</span> */}