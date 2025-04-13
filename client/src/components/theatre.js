import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Css/theatre.css'
import Radiocomponent from './radiocomponent.js'
import BsCxt from '../context/Bscontext.js'

const Theatre = (props) => {
    const context = useContext(BsCxt);
    const {city,movieName,completeDataList,setIndex} = context;
    const navigate = useNavigate();
    
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
  return (
    <div>
         <div className='nav-section'>
          <div className='logo-section'>🎬mOvIe</div>
            {/* <input placeholder='state Name...' className='input-section'/> */}
            <div className='location-section' style={{marginLeft:'6rem'}}>{city}</div>
            <div className='choose-location'>🛖</div>
         </div>
         <br/>
         <br/>
            <div style={{fontSize:'xx-large',marginLeft:'6rem',fontWeight:'bold'}}>{movieName}</div>
         <br/>
         <div style={{width:'100%',height:'2px',backgroundColor:'black'}}></div>
         {/* <br/> */}
         {/* <div> */}
        
        {
          completeDataList ?
          <div>
            <div style={{fontSize:'x-large',color:'green',display:'flex',justifyContent:'center'}}>Cinemas in your place.</div>
          {
            completeDataList.map((el,index)=>{
              return (
                <>
                   <div key ={Date.now()} style={{width:'100%',height:'5rem',color:'black',backgroundColor:'rgb(222, 244, 220)',borderRadius:'12px',marginTop:'2rem',display:'flex'}}>
                <div key={Date.now()} style={{fontSize:'large',marginLeft:'6rem',display:'flex',marginTop:'2rem',backgroundColor:'rgb(222, 244, 220)'}}> 
                  {el.theatre}<span style={{fontSize:'medium',marginLeft:'0.5rem',backgroundColor:'rgb(222, 244, 220)'}}> ({el.location})</span> </div> 
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
                </>
              )
            })     
          }
          </div>
           :
           <div></div>
        }
        {/* </div> */}
    </div>
  )
}

export default Theatre

    //     <div style={{backgroundColor:'rgb(226, 226, 226)',width:'100%',padding:'1rem'}} >
    //       <div style={{width:'100%',height:'5rem',color:'black',backgroundColor:'rgb(222, 244, 220)',borderRadius:'12px',marginTop:'2rem',display:'flex'}}>
    //            <div style={{fontSize:'large',marginLeft:'6rem',display:'flex',marginTop:'2rem'}}> Inox </div> 
    //             <div className='SM_main_container' onClick={handleSlot}>
                // {
                //     time.map((el,index)=>{
                //         return (
                //             <Radiocomponent text={el} key={index} changeSelection={handleChangeScreen}/>
                //             )
                //         })
                //     }
    //             </div>
    //       </div>
    //       <div style={{width:'100%',height:'5rem',color:'black',backgroundColor:'rgb(222, 244, 220)',marginTop:'0.3rem',borderRadius:'12px',display:'flex'}}>
    //           <div style={{fontSize:'large',marginLeft:'6rem',marginTop:'2rem'}}> Rajmandir</div>
    //           <div className='SM_main_container' onClick={handleSlot}>
    //             {
    //                 time.map((el,index)=>{
    //                     return (
    //                         <Radiocomponent text={el} key={index} changeSelection={handleChangeScreen}/>
    //                         )
    //                     })
    //                 }
    //             </div>
    //         </div>
    //       <div style={{width:'100%',height:'5rem',color:'black',backgroundColor:'rgb(222, 244, 220)',marginTop:'0.3rem',borderRadius:'12px',display:'flex'}}>
    //            <div style={{fontSize:'large',marginLeft:'6rem',marginTop:'2rem'}}> Cinepolis</div> 
    //            <div className='SM_main_container' onClick={handleSlot}>
    //             {
    //                 time.map((el,index)=>{
    //                     return (
    //                         <Radiocomponent text={el} key={index} changeSelection={handleChangeScreen}/>
    //                         )
    //                     })
    //                 }
    //             </div>
    //         </div>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //    </div>