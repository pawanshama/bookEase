import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import BsCxt from '../context/Bscontext'

const BlockCard = (props) => {
    const {name,block} = props
    const context = useContext(BsCxt);
    const {email,setMovieName} = context
    const navigate=useNavigate()
    // console.log(name)
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
         const data = await fetch(`http://localhost:8000/movie/delete?email=${email}&movieName=${name}`,{
           method:'Delete',
          })
         const response =await data.json();
         console.log(response);
        }
        // console.log(name)
        if(value === name){
             fireEvent()
        }
        console.log(value)
    }

  return (
    <>
        <div style={{width:'80%',height:'3rem',marginLeft:'3rem',color:'black',display:'flex',flexDirection:'row',backgroundColor:'green',borderRadius:'12px',marginBottom:'1rem'}}>
            <div style={{marginTop:'0.5rem',backgroundColor:'red',marginLeft:'1rem',borderRadius:'0.7rem',width:'auto',height:'1.5rem',paddingLeft:'10px',paddingRight:'10px'}}>{name}</div>
            <div style={{width:'2rem',height:'2rem',display:'flex',
              flexDirection:'column',marginLeft:'3rem',
              cursor:'pointer',backgroundColor:'green'}} onClick={handleDeletePlusEdit}>
                <div style={{fontSize:'x-large',backgroundColor:'green'}}>🛠️</div>
                <div style={{fontSize:'small',backgroundColor:'green'}}>edit</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',width:'2rem',height:'2rem',
              marginLeft:'3rem',cursor:'pointer',backgroundColor:'green'}} onClick={handleDelete}>
                <div style={{fontSize:'x-large',backgroundColor:'green'}}>🗑️</div>
                <div style={{fontSize:'small',backgroundColor:'green'}}>delete</div>
            </div>
        </div>
    </>
  )
}

export default BlockCard
