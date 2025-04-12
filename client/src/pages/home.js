import React, { useContext, useEffect, useState} from 'react'
import Selectmovie from '../components/Selectmovie'
import '../Css/Home.css'
import BsCxt from '../context/Bscontext'


const Home = () => {
  const context = useContext(BsCxt)
  const [a,setA] = useState('');
  const {city,token,movieList,setMovieList,setMessage,
    listMovieDown,setListMovieDown} = context
  const [t,setT] = useState(0);

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

  return (
    <>
       <div className='nav-section'>
         <div className='logo-section'>🎬mOvIe</div>
         <input placeholder='search movie.... ' value={a} onChange={handleMovieContent}/>
         <div className='location-section'>{city}</div>
         <div className='choose-location'>🛖</div>
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
