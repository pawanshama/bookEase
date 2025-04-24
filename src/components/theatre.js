import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Css/theatre.css'
import Radiocomponent from './radiocomponent.js'
import BsCxt from '../context/Bscontext.js'

const Theatre = (props) => {
    const context = useContext(BsCxt);
    const {city,movieName,completeDataList,setIndex} = context;
    const navigate = useNavigate();
    console.log(completeDataList);
    const handleChangeScreen = ()=>{

    }
    //handles theatre click and time slot booking for a fixed movie
    const handleSlot=(e)=>{
        e.preventDefault();
        const mn = e.target.getAttribute('name')
        // console.log(mn);
        setIndex(mn);
        navigate('/home/booking/theatre')
      }
      
      //route to login page 
      const routeToHome=()=>{
        navigate('/home',{replace:true});
    }

  return (
    <div >
         <div className='nav-section'>
          <div className='logo-section'>🎬mOvIe</div>
            {/* <input placeholder='state Name...' className='input-section'/> */}
            <div className='location-section' style={{marginLeft:'6rem'}}>{city}</div>
            <div className='choose-location'>🛖</div>
            <div className='logout' onClick={routeToHome}>Logout</div>
         </div>
         <br/>
            <div style={{width:'auto',height:'auto',fontSize:'xx-large',marginLeft:'6rem',fontWeight:'bold'}}>{movieName}</div>
         <br/>
         <div style={{width:'100%',height:'2px',backgroundColor:'black'}}></div>
        {/* <div> */}
          {
          completeDataList ?
          <div >
            <div style={{width:'auto',height:'auto',fontSize:'x-large',color:'green',display:'flex',justifyContent:'center'}}>Cinemas in your place.</div>
          {
            completeDataList.map((el,index)=>{
              return (
                // <>
                <div key ={Date.now()} className='same-container'>
                <div key={Date.now()} style={{fontSize:'large',
                  marginLeft:'6rem',display:'flex',marginTop:'2rem',backgroundColor:'#fff'}}> 
                  {el.theatre}<span style={{width:'auto',height:'auto',fontSize:'medium',marginLeft:'0.5rem',
                    backgroundColor:'#fff'}}> ({el.location})</span> </div> 
                    <div key={index} className='SM_main_container' onClick={(e)=>handleSlot(e)}>
                        {
                          el.slots.map((e,ind)=>{
                            return (
                              <Radiocomponent text={e} key={ind} data={el.movieName} changeSelection={handleChangeScreen}/>
                            )
                          })
                        }
                    </div>
                </div>
                // </>
              )
            })     
          }
          </div>
           :
           <div></div>
          }
        {/* </div>         */}
        {/* </div> */}
    </div>
  )
}

export default Theatre