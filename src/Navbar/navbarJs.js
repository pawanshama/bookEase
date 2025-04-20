import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Css/navbar.css'
import {districtListMove} from "../apicalls/move.js"
import BsCxt from '../context/Bscontext.js'

const NavbarJs = (props) => {
  // const locationCountry='India'
  const context = useContext(BsCxt);
  const {cityList,setCityList,state,setCity} = context
  const navigate = useNavigate()
 
  const rst=districtListMove[state]
 
  useEffect(()=>{
    if(!cityList){
      setCityList(rst);
    }
  },[cityList])

  // useEffect(()=>{
    
  // },[city])
 
  const [q,setQ] = useState('');
 
  const handleCity=(e)=>{
      const attr = e.target.getAttribute("name")
      setCity(attr)
      navigate('/home')
  }
  const handleCityQuery=(e)=>{
      setCityList(pre=>{
        const filterData = rst.filter((item) =>
          item.toLowerCase().includes(String(e.target.value)?.toLowerCase())
        );
         return filterData
      })
      setQ(e.target.value)
  }
 
  
  return (
    <div>
       <div className='nav-section'>
         <div className='logo-section'>🎬mOvIe</div>
         <input placeholder='city Name...' className='input-section' value={q} onChange={handleCityQuery}/>
         <div className='location-section'>{state}</div>
         <div className='choose-location'>🛖</div>
       </div>
       <br/>
       <div className='fulllist' onClick={handleCity}>
       {
         cityList && cityList.map((cl,index)=>{
           return (<div className='select-section' key={index} name={cl} > {cl} </div>)
          })
        }
      </div>
    </div>
  )
}

export default NavbarJs

