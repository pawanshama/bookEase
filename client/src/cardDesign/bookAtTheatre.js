import React, { useContext, useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import '../Css/bookAtTheatre.css'
import BsCxt from '../context/Bscontext';
import Design from '../components/design';

const BookAtTheatre = (props) => {
    const context = useContext(BsCxt);
    const [r,setR]=useState(null);
    const [rr,setRR]=useState(null);
    const navigate = useNavigate();
    const {completeDataList,city,index} = context;
    useEffect(()=>{
      if(!r && index!=='' && completeDataList){
        setRR(completeDataList.filter((prev)=>prev.movieName===index)[0])
      }
      else if(!completeDataList){
        navigate(-1);
      }
      
    },[r,index])
    
    useEffect(()=>{
      if(rr){
        console.log(rr);
        setR(rr.seats)
      } 
    },[rr,r])
   
  return (
    <div>
          <div className='nav-section'>
          <div className='logo-section'>🎬mOvIe</div>
            <div className='location-section' style={{marginLeft:'6rem'}}>{city}</div>
            <div className='choose-location'>🛖</div>
         </div>
         <br/>
         Hello.........
         <div className="seat-container">
           <div className="screen-panel">All eyes this way please!</div>
          
            {r ? Object.keys(r).map((row) => (
                <div key={row.id} className="row">
                <span className="row-label">{row.id}</span>
                <br/>
                <hr/>
                <br/>
                {r[row]?r[row].map((seat) => (
                    <button
                    key={seat}
                    className={`seat`}
                    name={row.id}
                    >
                    {seat}
                    </button>
                )):
                <div></div>
                }
                </div>
            )):
            <Design word={'go back'}/>
          }
      </div>
      <button style={{width:'auto',height:'2.2rem',backgroundColor:'green',padding:'4px',
        borderRadius:'0.8rem',marginLeft:'17rem',marginTop:'2rem',marginBottom:'3rem',fontSize:'x-large'}}> Pay Now </button>
    </div>
  )
}

export default BookAtTheatre
