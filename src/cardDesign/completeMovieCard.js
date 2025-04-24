import React,{useContext,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../Css/completeMovieCard.css'
import BsCxt from '../context/Bscontext'
import Design from '../components/design'
// let filteredData='';
const CompleteMovieCard = (props) => {
  const u = "data:image/jpeg;base64,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"
  const navigate = useNavigate();
  const context = useContext(BsCxt);
  const [filteredData,setFilteredData] = useState('');
  const [renderFunction,setRenderFunction] = useState(0);
  const {movieList,city,movieName,url,token,setCompleteDataList,setMessage} = context;
  const {setEmail,setToken,setCountry,setMovieName,setListMovieDown,completeDataList,
    setAdminBigList,setIndex,setCity,setState,setUrl,
    setStateList,setCityList,setMovieList,
    setCompeletMovieDetails,setSelectedSeats,setLockedSeats} = context;
 
  useEffect(()=>{
    if(filteredData.length===0 && movieList!==null){
      setFilteredData(movieList.filter((prev)=> prev.movieName === movieName)[0])
    }
    else if(!movieList){
       setRenderFunction(1);
    }
  },[filteredData])
  
  //This below code fetches data from backend where city and movieName matches 
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
      // console.log(response.data);
      setCompleteDataList(response.data)
    }catch(err){
      setMessage("error occured while movie selection")
      console.log("error occured",err)
    }
    navigate('/home/booking')
  }

  // useEffect(()=>{
  //    console.log(completeDataList);
  // },[completeDataList])

  //navigate the page to home.
  const routeToHome=()=>{
    setEmail('');
    setToken('');
    setCountry('');
    setMovieName('');
    setListMovieDown(null); //this is used in home for storing movies coming from backend
    setAdminBigList([]);
    setIndex('');  //this is used 
    setMessage('');
    setCity('');
    setState('');
    setUrl('');
    setStateList('');
    setCityList('');
    setCompleteDataList(null);
    setMovieList(null);
    setCompeletMovieDetails('');
    setSelectedSeats([]);
    setLockedSeats({});
    navigate('/home',{replace:true})
  }

  return (
    <div>
         <div className='nav-section'>
          <div className='logo-section'>🎬mOvIe</div>
            <div>{filteredData?.movieName}</div>
            <div className='location-section'>{city}</div>
            <div className='choose-location'>🛖</div>
            <div className='logout' onClick={routeToHome}>Logout</div>
         </div>
       <br/>
         <div className='main-movie'>
          <div className='movie-card'>
            <div>
             <img src={url?url:u} alt='movie-image' className='image-section'/>
            </div>
          </div>
            { renderFunction===0?
              <>
              <div style={{marginLeft:'1rem',color:'black',backgroundColor:'rgb(246, 240, 225)'}}>
                <div style={{fontSize:'xx-large',marginTop:'1rem',
                  color:'black',backgroundColor:'rgb(246, 240, 225)'}}>{filteredData?.movieName}</div>
                <div style={{marginTop:'1rem',marginBottom:'0.5rem',backgroundColor:'rgb(246, 240, 225)'}}>
                  <span style={{marginLeft:'0.1rem',backgroundColor:'rgb(246, 240, 225)',
                    fontSize:'larger',fontWeight:'bold',color:'Black'}}>Description:</span>  {filteredData?.description}</div>
                <div style={{marginLeft:'0.1rem',fontSize:'larger',color:'red'}}>
                  <span style={{marginLeft:'0.1rem',backgroundColor:'rgb(246, 240, 225)',
                    fontSize:'larger',fontWeight:'bold',color:'Black'}}>Genre:</span> {filteredData?.genre}</div>
                <button style={{backgroundColor:'red', fontSize:'large', borderRadius:'0.7rem',padding:'0.3rem', marginTop:'7rem',marginLeft:'2rem' }} onClick={handleBookingTheatres}> Book Ticket</button>
              </div> 
              </>
              :
              <Design word={'go back'}/>
            }
       </div>
       <br/>

    </div>
  )
}

export default CompleteMovieCard
{/* <span style={{marginLeft:'0.1rem',fontSize:'larger',color:'yellow'}}>Mystry</span> <span style={{marginLeft:'0.1rem',fontSize:'larger',color:'yellow'}}>advanture</span> */}