import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BsCxt from '../context/Bscontext';
import '../Css/seatscreation.css'
// let r = '@';
// let t=0;
const SeatsCreation = () => {
  const [q,setQ] = useState('');
  const context = useContext(BsCxt)
  const [r,setR] = useState('@');
  const [t,setT]=useState(0);
  const {rowNums,setRowNums} = context
  const [row,setRow] = useState('');
  const navigate = useNavigate();
    // console.log('a'.charCodeAt(0));
    // console.log(String.fromCharCode(67));

    //seats creation horizontally
    const handleHorizontalSeat = () => {
         setRow(prev=>[
            ...prev,q
         ])
    }

    //seats creation vertically
    const handleVerticalSeat = () => {
        // setRowNums(rl=>([...rl,row]))
        setR(String.fromCharCode(r.charCodeAt(0) + 1));
        setRowNums(rl=>({...rl,[r]:row}))
        setRow('');
        // console.log(rowNums);
    }
    
    // useEffect(()=>{
    //   console.log(rowNums)
    // },[rowNums])

    //handling delete rows
    const handleCancel=(e)=>{
      // console.log(e.target)
      const ind = parseInt(e.target.getAttribute('name'));
      setRow((prev)=>{
           const data = prev.filter((item,id)=>id !== ind);
           return data;
      })
    }

    //enabling full view of rowNums
    const handleCare=()=>{
      setRow('');
      if(t===1){
        setT(0)
      }
      else{
        setT(1);
      }
      // console.log(t);
    }
    
    //handle request when rows are complete
    const handleDoneRequest=()=>{
      navigate('/newMovie..')
    }


// console.log('t->',t);
  return (
    <div className='fullSize'>
         <div style={{width:'auto',marginTop:'2rem',marginBottom:'1rem',marginLeft:'3rem',borderRadius:'12px',color:'black'}}>
            Increase horizontal seats:
            <input  placeholder='enter price of single horizontal row..' value={q} onChange={(e)=>setQ(e.target.value)}/>
            <button type='button' onClick={handleHorizontalSeat} style={{backgroundColor:'green'}}> Enter </button>
            <div style={{backgroundColor:'rgb(231, 230, 224)',display:'flex',width:'100%',height:'auto',flexWrap:'wrap'}}>
                {
                  row && row.map((el,index)=>{
                    return (<div key={index} style={{marginLeft:'1rem',backgroundColor:'red',}}>{String.fromCharCode(r.charCodeAt(0) + 1)}:{el}
                       <div key={index} style={{width:'auto',height:'auto',fontSize:'small',position:'fixed',cursor:'pointer'}} name={index} onClick={handleCancel}>❌</div>
                    </div>)
                  })
                }
            </div>
         </div>
         <div>
            <button type='button' onClick={handleVerticalSeat} 
            style={{backgroundColor:'green',marginTop:'1rem',
            marginBottom:'1rem',width:'auto',height:'auto'}}>Increase vertical seats</button>  
         </div>
         <div>
            <button style={{backgroundColor:'green',marginTop:'1rem',marginBottom:'1rem',width:'auto',height:'auto'}}  
            type='button' 
            onClick={handleCare}>Click to activate view</button>
            <button style={{backgroundColor:'green',marginTop:'1rem',marginBottom:'1rem',width:'auto',height:'auto'}}
            type='button' onClick={handleCare}>Click to deactivate view</button>
         </div>
         <div style={{marginTop:'2rem',display:`${t===0?'none':'flex'}`,flexDirection:'column'}}>
         {
           (t>0) && Object.keys(rowNums).map((key)=>{
             return (
            <div key={key} style={{marginTop:'12px',display:'flex',flexDirection:'row'}}>
              {key}:
              {
               rowNums[key].length>0 && rowNums[key].map((c,ind)=>{
                  return(
                    <div key={ind} style={{marginLeft:'1rem'}}>{c}</div>
                  )
                })
              }
            </div>
            )
          })
        }
        </div>
        <div>
          <button 
            style={{ marginTop:'1rem',marginLeft:'1rem',width:'auto',height:'auto'}} 
            type='button' 
            onClick={handleDoneRequest}> Done </button>
          </div>
    </div>
  )
}

export default SeatsCreation
// style={{width:'auto',marginTop:'2rem',marginLeft:'3rem',borderRadius:'12px',color:'black'}