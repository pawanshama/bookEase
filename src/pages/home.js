import React, { useContext, useEffect, useState} from 'react'
import Selectmovie from '../components/Selectmovie'
import '../Css/Home.css'
import BsCxt from '../context/Bscontext'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const context = useContext(BsCxt)
  const [a,setA] = useState('');
  const {city,token,movieList,
    listMovieDown} = context
    const {setEmail,setToken,setCountry,setMovieName,setListMovieDown,
      setAdminBigList,setIndex,setMessage,setCity,setState,setUrl,
      setStateList,setCityList,setCompleteDataList,setMovieList,
      setCompeletMovieDetails,setSelectedSeats,setLockedSeats} = context;
  const [t,setT] = useState(0);

  const navigate = useNavigate()

  //function to call api to get data from backend
  const listMovieFunc = async()=>{
    try{
      const data = await fetch(`http://localhost:8000/movieFind/user?city=${city}`,{
        method:'Get',
        headers:{
          "Content-Type": "application/json", 
          "authorization": `${token}` 
        }
      })
      const response = await data.json();
      setListMovieDown(response.data);
      setMovieList(response.data);
      // console.log(response.data)
      // console.log(movieList)
      setT(1);
      setMessage(response.message)
    }catch(err){
      setMessage('Backend Problem. City recommendations not working ')
      console.log('error in home.js');
    }
  }
  //first time to call api after token received
  useEffect(()=>{
    if(!listMovieDown){
      if(t===0)listMovieFunc();
    }
  },[listMovieDown])
  
  //first time to call Movie list when received from backend
  useEffect(()=>{
    if(movieList===null && listMovieDown!==null){
      setMovieList(listMovieDown);
      // console.log(listMovieDown)
    }
  },[movieList,listMovieDown])
  
  //function to filter movie based on searches in search field
  const handleMovieContent=(e)=>{
    console.log(listMovieDown)
      setMovieList(prev=>{
        const filterData = listMovieDown.filter((item) =>
          item.movieName.toLowerCase().includes(String(e.target.value)?.toLowerCase())
        );
         return filterData
      })
      
      setA(e.target.value)
  }

  //funtion to logout from the app.
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
    navigate('/bookedSeats');
  }

  return (
    <>
       <div className='nav-section'>
         <div className='logo-section'>🎬mOvIe</div>
         <input placeholder='search movie.... ' value={a} onChange={handleMovieContent}/>
         <div className='location-section'>{city}</div>
         <div className='choose-location'>🛖</div>
         <div className='logout' onClick={routeToHome}>Logout</div>
       </div>
    <div className='container'>
      { movieList?
        <Selectmovie move={movieList}/>:
        <Selectmovie move={movieList}/>
      }

    </div>
</>
  )
}

export default Home
