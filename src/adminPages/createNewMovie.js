import React,{useContext, useEffect, useState} from 'react'
import SeatsCreation from './seatsCreation'
// import '../Css/blockCard.css'
import { useNavigate } from 'react-router-dom'
import BsCxt from '../context/Bscontext'
import './creation.css'
import axios from 'axios'

let data=null;
const CreateNewMovie = () => {
    const context = useContext(BsCxt);
    const {movieName,adminBigList,country,rowNums,setRowNums,
      token,changeform,setChangeForm,email,setMessage,message}= context
   const [image,setImage] = useState(null);
    // console.log(adminBigList.length)
    
    if(!data && adminBigList.length>0 && movieName !== ''){ 
        data = adminBigList.filter((item)=>item.movieName === movieName)
        // console.log(data)
        
        setChangeForm({movieName:data[0].movieName,theatre:data[0].theatre,
          startDate:data[0].startDate,endDate:data[0].endDate,
          genre:data[0].genre,ratings:data[0].ratings,description:data[0].description,city:data[0].city,
          location:data[0].location})
    }
    console.log(Object.keys(rowNums).length)
    useEffect(()=>{
        // console.log(rowNums);
        setRowNums(rowNums)
        if(rowNums.length>0){
          setChangeForm({movieName:data[0].movieName,theatre:data[0].theatre,
            startDate:data[0].startDate,endDate:data[0].endDate,
            genre:data[0].genre,ratings:data[0].ratings,description:data[0].description,city:data[0].city,
            location:data[0].location})
          }
    },[rowNums])

    const navigate = useNavigate()
    
    //handling the seats button and navigating it to different route
    const handleClick=()=>{
        navigate('/newMovie../seats')
    }

    //handle each input 
    const handleform=(e)=>{
        const {name,value} = e.target;
        setChangeForm(prev=>({...prev,[name]:value}));
        // console.log(changeform)
    }

    //handling submission of movie
    const handleSubmit=async(e)=>{
        //needs movie-array to update
        e.preventDefault()
        const formData = new FormData();
        formData.append('movieName',changeform.movieName);
        formData.append('email',email);
        formData.append('theatre',changeform.theatre);
        formData.append('startDate',changeform.startDate);
        formData.append('endDate',changeform.endDate);
        formData.append('genre',changeform.genre);
        formData.append('slots',changeform.slots);
        formData.append('ratings',changeform.ratings);
        formData.append('description',changeform.description);
        formData.append('city',changeform.city);
        formData.append('location',changeform.location);
        formData.append('image',image);
        formData.append('seats',JSON.stringify(rowNums));
        try{

          const d = await axios.post(`http://localhost:8000/movie/adminPost`,formData,{
            headers:{ 
              "authorization": `${token}` 
          }
        })
          // console.log(d.data.data);
          setMessage(d.data.message)

      }
      catch(error){
        setMessage(error.response.data.message)
        // console.log(error.response.data.message)
      }

    }

    //handling cancel of any update
    const handleCancel = ()=>{
        setRowNums([])
        setChangeForm({movieName:'',theatre:'',
          startDate:'',endDate:'',genre:'',slots:'',ratings:'',description:'',city:'',location:''})
        navigate('/dashboard')
    }
  
  return (
        <div className='containers'>
          <div className='nav-section'>
            <div className='logo-section'>🎬mOvEi</div>
            <div className='location-section'>{country}</div>
            <div className='choose-location'>🛖</div>
            <div className='logout'>Logout</div>
          </div>
          <div className='set-message'>
              {message !==''?
                <div></div> 
                :
                <div className='set-message' style={{color:'black',fontSize:'x-large'}}>{message}</div>
              }
          </div>
          <div className='form-container'>
            <form onSubmit={handleSubmit} style={{backgroundColor:'white'}}>
            <div className='elements'>
            <span>
             MovieName:
            </span>
            <input placeholder='Enter movie..' name='movieName' value={changeform.movieName}  onChange={handleform}/>
            </div>
            <div className='elements'>
            <span>
             Theatre:
            </span>
            <input placeholder='theatre..' name='theatre' value={changeform.theatre} onChange={handleform}/>
            </div>
            <div className='elements'>
            <span>
             StartDate:
            </span>
            <input placeholder='enter startDate..' name='startDate' value={changeform.startDate} onChange={handleform}/>
            </div>
            <div className='elements'>
            <span>
             EndDate:
            </span>
            <input placeholder='enter endDate..' name='endDate' value={changeform.endDate} onChange={handleform}/>
            </div>
            <div className='elements'>
            <span>
             City:
            </span>
            <input placeholder='enter city..' name='city' value={changeform.city} onChange={handleform}/>
            </div>
            <div className='elements'>
            <span>
             Location-in-city:
            </span>
            <input placeholder='Enter location in city' name='location' value={changeform.location} onChange={handleform}/>
            </div>
            <div className='elements'>
            <span>
              Movie Description:
            </span>
            <input placeholder='description..' name='description' value={changeform.description} onChange={handleform}/>
            </div>
            <div className='elements'>
            <span>
              Genre:
            </span>
            <input placeholder='enter genre..' name='genre' value={changeform.genre} onChange={handleform}/>
            </div>
            <div className='elements'>
            <span>
              Ratings:
            </span>
            <input placeholder='ratings..' name='ratings' value={changeform.ratings} onChange={handleform}/>
            </div>
            <div className='elements'>
            <span>
              Movie Time Slots(Write timings in AM,PM and separate timings by comma(,)):
            </span>
            <input placeholder=''
             name='slots' value={changeform.slots} onChange={handleform}/>
            </div>
            <div className='elements'>
            <span>
             seats-and-price-set :
            </span>
            <button type='button' onClick={handleClick} style={{marginLeft:'2px',backgroundColor:'white',
            margin:'0.2rem',fontSize:'large',borderRadius:'0.3rem',backgroundColor:'rgb(218, 222, 211)'}}>click for seats</button>
            {
               Object.keys(rowNums).length>0?
               <p  style={{backgroundColor:'white'}}>seats Booked</p>:
               <p  style={{backgroundColor:'white'}}>seats empty</p>
            }
            </div>
            <div className='elements'>
              <span>
                upload Image here:
              </span>
               <input type='file' name='image' onChange={(e)=>setImage(e.target.files[0])} style={{backgroundColor:'white'}}/>
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
                 <div style={{backgroundColor:'#fff'}}>
                    <button style={{marginRight:'4px',backgroundColor:'rgb(218, 222, 211)',padding:'0.7rem',
                      width:'6rem',borderRadius:'0.8rem'}} 
                      type='submit'>Submit</button>
                </div>
                <div style={{backgroundColor:'#fff'}} >
                    <button style={{backgroundColor:'rgb(218, 222, 211)',borderRadius:'12px',padding:'0.7rem',marginLeft:'1rem',
                      width:'6rem',borderRadius:'0.8rem'}}  
                      type='button' 
                      onClick={handleCancel}> Cancel </button>
                </div>
             </div>
            </form>
          </div>
        </div>  
  )
}

export default CreateNewMovie
