import '../Css/cardMovie.css'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BsCxt from '../context/Bscontext'
const CardMovie = (props) => {
    const [title,setTitle] = useState(props.text.movieName)
    const [rat,setRat] = useState(props.text.ratings)
    const [id,setId] = useState(props.text._id)
    const context = useContext(BsCxt)
    const {setMovieName,token,setUrl,setMessage} = context
    const [urlt,setUrlt] = useState('');
    const navigate = useNavigate()
    const handleIndividualCard=()=>{
        setMovieName(title)
        setUrl(urlt)
        
        navigate(`/home/cardmovie`)
    }

    useEffect(()=>{

      const normal = ()=>{
        
        fetch(`http://localhost:8000/movie/img/${id}`,{
          method:'GET',
          headers:{
            "Content-Type": "application/json", 
            "authorization": `${token}` 
          }
        })
        .then((res)=>res.blob())
        .then((blob)=>{
          const dat = URL.createObjectURL(blob);
          setUrlt(dat);
        })
        .catch(err=>setMessage(err.message));
        // console.log(data);
      }
      // t=0;
      normal();
    },[])

    // }
    // const handleURL = async()=>{
    //   // return data;
    // }
    const u = "data:image/jpeg;base64,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"
  return (
    <div className='conr'> 
         <div className='second' onClick={handleIndividualCard}>
            <div  className='image-section'>
             <img src={urlt?urlt:u} alt='image'/>
            </div>
            <div className='ratings-image'>
              <div className='ratings-section'>rating: {rat}/5</div>
              <div className='rat-img-section'></div>
            </div>
         </div>
         <div className='title-section'>{title}</div>
    </div>
  )
}

export default CardMovie
