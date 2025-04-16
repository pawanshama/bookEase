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
    const {noOfSeat,changeNoOfSeats} = useState([]);
    const {completeDataList,city,index,lockedSeats,setLockedSeats,selectedSeats,setSelectedSeats} = context;
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
        setR(rr.seats)
      } 
    },[rr,r])
  

    //locking buttons so that no one can access them if already booked by another user.
    const toggleSeatSelection = (row, seat) => {
      // changeNoOfSeats([...noOfSeat,`${row}-${seat}`]);
      window.localStorage.setItem(
        "seats",
        JSON.stringify({
            ...noOfSeat,
        })
       )
      if (lockedSeats[`${row}-${seat}`]) return;

    setSelectedSeats((prev) => {
      const newSelection = prev.includes(`${row}-${seat}`)
        ? prev.filter((s) => s !== `${row}-${seat}`)
        : [...prev, `${row}-${seat}`];

      setLockedSeats((prevLocks) => {
        const newLocks = { ...prevLocks };
        if (!prev.includes(`${row}-${seat}`)) {
          newLocks[`${row}-${seat}`] = true;
          setTimeout(() => {
            setLockedSeats((locks) => {
              const updatedLocks = { ...locks };
              delete updatedLocks[`${row}-${seat}`];
              window.localStorage.clear()
              return updatedLocks;
            });
          }, 5000);
        }

        return newLocks;
      });
      setTimeout(()=>{
        setSelectedSeats((newS)=>{
          const select = newS.filter((s)=>s!==`${row}-${seat}`)
          return select;
        })
      },5000);
      return newSelection;
    });
  };
   
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
                {r[row]?r[row].map((seat,index) => (
                    <button
                    key={seat}
                    // className={`seat`}
                    className={`seat ${selectedSeats.includes(`${row.id}-${seat}`) ? "selected" : ""} ${lockedSeats[`${row.id}-${seat}`] ? "locked" : ""}`}
                    onClick={() => toggleSeatSelection(row.id, seat)}
                    disabled={lockedSeats[`${row.id}-${seat}`]}
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
