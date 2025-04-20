import React from 'react'
import { useNavigate } from 'react-router-dom'

const Design = (props) => {
    const {word} = props
    const navigate = useNavigate();

    //onclick function for this function
    const handleClick=()=>{
      navigate('/home')
    }
  return (
    <div style={{backgroundColor:'red',color:'white',cursor:'pointer',
             fontSize:'x-large',borderRadius:'12px',
             width:'auto',padding:'0.3rem'}} onClick={handleClick}>
         {word}
    </div>
  )
}

export default Design
