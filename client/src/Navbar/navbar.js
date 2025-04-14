import React, { useContext, useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Css/navbar.css'
import {stateListMove} from "../apicalls/move.js"
import BsCxt from '../context/Bscontext.js'

const Navbar = (props) => {
  const context = useContext(BsCxt);
  const {setState,country,stateList,setStateList} = context
  const navigate = useNavigate();
  
  let rst = stateListMove;
  useEffect(()=>{
    if(!stateList){
      setStateList(rst);
    }
  },[stateList])

  const handleState=(e)=>{
      const attributeValue = e.target.getAttribute("name")
      // console.log(attributeValue)
      setState(attributeValue)
      navigate('/city')
  }
  const [q,setQ] = useState('');
  const handleQuerySearch = ( e ) => {

    setStateList((prev)=>{
      const filteredData = rst.filter((item) =>
        item.toLowerCase().includes(String(e.target.value)?.toLowerCase())
      );
       return filteredData
      })

      setQ(e.target.value);
  }
  
  return (
    <div>
       <div className='nav-section'>
         <div className='logo-section'>🎬mOvIe</div>
         <input placeholder='state Name...' className='input-section' value={q} onChange={handleQuerySearch}/>
         <div className='location-section'>{country}</div>
         <div className='choose-location'>🛖</div>
       </div>
       <br/>
       <div className='fulllist' onClick={handleState}>
       {
          stateList && stateList.map((cl,index)=>{
           return (
               <div className='select-section' key={index} name={cl} >{cl}</div>
           )
          })
        }
      </div>
    </div>
  )
}

export default Navbar
