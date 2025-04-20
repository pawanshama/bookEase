import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import BsCxt from '../context/Bscontext'
import '../Css/blk.css'

const BlockCard = (props) => {
    const {name,block,slock} = props
    const context = useContext(BsCxt);
    const {email,setMovieName,setMessage,message} = context
    const navigate=useNavigate()
   
    // const [q,setQ]=useState();

    //handling search query

    //Handle delete and update
    const handleDeletePlusEdit = ()=>{
      const value = prompt('confirm update',`${name}`)
          //fire a patch or put query here to delete and update from start
          if(value===`${name}`){
            setMovieName(name);
            navigate('/newMovie..')
          }
   }
        
        //handling delete only
        const handleDelete = () => {
      const value = prompt('confirm delete',`${name}`)
       const fireEvent = async()=>{
          try{

            const data = await fetch(`http://localhost:8000/movie/delete?email=${email}&movieName=${name}`,{
              method:'Delete',
            })
            const response =await data.json();
            setMessage(response.message)
            block(0);
            slock([]);
            //  console.log(response);
          }
          catch(err){
            setMessage(err.message)
          }
        }
        // console.log(name)
        if(value === name){
             fireEvent()
        }
        console.log(value)
    }

  return (
    <>
        <div style={{width:'80%',height:'3rem',marginLeft:'3rem',color:'black',display:'flex',flexDirection:'row',backgroundColor:'#fff',borderRadius:'12px',marginBottom:'1rem'}}>
            <div className='responsive-box'>{name}</div>
            <div style={{width:'2rem',height:'2rem',display:'flex',
              flexDirection:'column',marginLeft:'3rem',
              cursor:'pointer',backgroundColor:'#fff'}} onClick={handleDeletePlusEdit}>
                <div style={{fontSize:'x-large',backgroundColor:'#fff'}}>🛠️</div>
                <div style={{fontSize:'small',backgroundColor:'#fff'}}>edit</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',width:'2rem',height:'2rem',
              marginLeft:'3rem',cursor:'pointer',backgroundColor:'#fff'}} onClick={handleDelete}>
                <div style={{fontSize:'x-large',backgroundColor:'#fff'}}>🗑️</div>
                <div style={{fontSize:'small',backgroundColor:'#fff'}}>delete</div>
            </div>
        </div>
    </>
  )
}

export default BlockCard
