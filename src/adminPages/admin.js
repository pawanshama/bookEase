import React, { useContext, useState, useEffect } from 'react'
import BlockCard from './blockCard'
import BsCxt from "../context/Bscontext"
import { useNavigate } from 'react-router-dom';
import '../Css/blockCard.css'
import Design from '../components/design';

const Admin = () => {
    const [q,setQ] = useState(); 
    const [movieL,setMovieL] = useState([]); 
    // const [moviebundle,setMoviebundle] = useState('');
    const [m,setM] = useState('');
    const context = useContext(BsCxt);
    const [t,setT]=useState(0);
    const {email,
      country,
      token,
      setToken,
      setAdminBigList,
      message,
      setMessage} = context;
    
    if( movieL.length===0 && token && email && t===0){
      const handle = async() => {
        try{

          const ds = await fetch(`http://localhost:8000/stats/adminSearch`,{
            method:'POST',
            headers:{
              "Content-Type": "application/json", 
              "authorization": `${token}` 
            },
            body:JSON.stringify({email})
          })
        const res = await ds.json();
        // setMoviebundle(res.data);
        // console.log(res.data)
        setAdminBigList(res.data);
        // console.log(adminBigList);
        res.data.forEach(item => {
          setM(prev=>([...prev,item.movieName]))
        })
        res.data.forEach(item => {
          setMovieL(prev=>([...prev,item.movieName]))
        })
        
        setT(1)
        setMessage(res.message)
      }catch(err){
        setMessage(err.message)
        console.log("error occured",err)
      }
    }
    handle();
  }
  
  useEffect(()=>{
       console.log(message)
  },[message])
    
    //handle search query
    const handleQuerySearch=(e)=>{
      setMovieL(prev=>{
        const filteredData = m.filter((item) =>
          item.toLowerCase().includes(String(e.target.value)?.toLowerCase())
        );
        // console.log(filteredData)
        return filteredData
      }) 
      setQ(e.target.value)
    }  

    //Fetch movies names according to time stamp latest movies shown first.

    //Also search details of a movie when clicked.

    //handle create new movie
    const navigate = useNavigate();
    const handleCreateNewMovie = () => {
        navigate('/newMovie..')   
    }

    //routing user to login page
    const routeToHome=()=>{
      setToken('');
      navigate('/');
    }

  return (
    <div className='borderBox'>
       <div className='nav-section'>
         <div className='logo-section'>🎬mOvEi</div>
         <div>
         <input placeholder='search movie...' 
          className='input-section' 
          value={q} onChange={handleQuerySearch}/>
         </div>
         <div className='location-section'>{country}</div>
         <div className='choose-location'>🛖</div>
         <div className='new-movie' 
            onClick={handleCreateNewMovie}>+ Add new Movie</div>
         <div className='logout' onClick={routeToHome}>Logout</div>
       </div>
       <br/>
       <div className=''>
      <div className=''>
       {
         message!==''?
         <div></div>:
         <div>{message}</div>
        }
      </div>
       <div style={{width:'100%',height:'1px',backgroundColor:'black'}}></div>
       <div>
          {
            (movieL) ? movieL.map((el,index)=>{
              return ( <BlockCard key={index} name = {el} block = {setT} slock={setMovieL}/>
              )}):(<>
                    <div style={{fontSize:'xx-large',marginLeft:'3rem'}}>No movies Listed Here</div>
                    <Design word='go back'/>
                 </>
                )
          }
       </div>   
      </div>
    </div>
  )
}

export default Admin
