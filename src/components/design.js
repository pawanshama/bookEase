import React from 'react'
import { useNavigate } from 'react-router-dom'

const Design = (props) => {
    const {word,url} = props
    const navigate = useNavigate();

    //onclick function for this function
    const handleClick=()=>{
      navigate(url)
    }
  return (
    <div style={{backgroundColor:'red',color:'white',cursor:'pointer',
             fontSize:'x-large',borderRadius:'12px',
             width:'auto',padding:'0.3rem',height:'auto'}} onClick={handleClick}>
         {word}
    </div>
  )
}

export default Design
