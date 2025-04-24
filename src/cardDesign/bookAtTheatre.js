import React, { useContext, useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import '../Css/bookAtTheatre.css'
import BsCxt from '../context/Bscontext';
import Design from '../components/design';
import {loadStripe} from "@stripe/stripe-js"

const BookAtTheatre = (props) => {
    const context = useContext(BsCxt);
    const [r,setR]=useState(null);
    const [rr,setRR]=useState(null);
    const navigate = useNavigate();
    // const [newSelectedSeats,setNewSelectedSeats] = useState([]);
    // const [newLockedSeats,setNewLockedSeats] = useState({});
    const {completeDataList,city,index,newSelectedSeats,setNewSelectedSeats,
      lockedSeats,selectedSeats,email,newLockedSeats,setNewLockedSeats} = context;

    useEffect(()=>{
      setNewSelectedSeats([]);
      setNewLockedSeats({});
    },[])

    useEffect(()=>{
      if(!r && index!=='' && completeDataList){
        setRR(completeDataList.filter((prev)=>prev.movieName===index)[0])
      }
      else if(!completeDataList){
        navigate(-1);
      }
    },[r,index])
    
    useEffect(()=>{
      if(rr && !r){
        setR(rr.seats)
      } 
    },[rr,r])

    //locking buttons so that no one can access them if already booked by another user.
    const toggleSeatSelection = (row, seat) => {
      if (newLockedSeats[`${row}-${seat}`] || lockedSeats[`${row}-${seat}`]) return;

    setNewSelectedSeats((prev) => {
      const newSelection = prev.includes(`${row}-${seat}`)
        ? prev.filter((s) => s !== `${row}-${seat}`)
        : [...prev, `${row}-${seat}`];

      setNewLockedSeats((prevLocks) => {
        const newLocks = { ...prevLocks };
        if (!prev.includes(`${row}-${seat}`)) {
          newLocks[`${row}-${seat}`] = true;
          setTimeout(() => {
            setNewLockedSeats((locks) => {
              const updatedLocks = { ...locks };
              delete updatedLocks[`${row}-${seat}`];
              return updatedLocks;
            });
          }, 3600000);
        }
        return newLocks;
      });
      setTimeout(()=>{
        setNewSelectedSeats((newS)=>{
          const select = newS.filter((s)=>s!==`${row}-${seat}`)
          return select;
        })
      },3600000);
      return newSelection;
    });
  };

  console.log(email);

  //Function call which requests payment and gateway options
  const makePayment=async()=>{
       const stripe= await loadStripe("pk_test_51REbdFRsHS6QsQg4indtRgIil5PraFPmPVD1ixMUJP4UFQnw7XL31VDJHOiXBgCDC8C9gtrBFvY9DBur7JqfVnit00tTaMj7AX");
      try{

        const response = await fetch(`http://localhost:8000/create-checkout-sessions`,{
          method:'POST',
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({email,newSelectedSeats})
        })
        
        const session = await response.json();

        console.log('success .. success . .')
        const result = stripe.redirectToCheckout({
          sessionId:session.id
        });
        // console.log('successsss....................................')
      }
      catch(err){
        console.log("error occured at payment gateway");
      }
  }

  //route to home
  const routeToHome=()=>{
    navigate('/home',{replace:true})
  }
   
  return (
    <div>
          <div className='nav-section'>
          <div className='logo-section'>🎬mOvIe</div>
            <div className='location-section' style={{marginLeft:'6rem'}}>{city}</div>
            <div className='choose-location'>🛖</div>
            <div className='logout' onClick={routeToHome}>Logout</div>
         </div>
         <br/>
         {/* Hello......... */}
         <div className="seat-container">
           <div className="screen-panel">All eyes this way please!</div>
          
            {r ? Object.keys(r).map((row) => (
                <div key={row} className="row">
                <span className="row-label">{row}</span>
                <br/>
                <hr/>
                <br/>
                {r[row]?r[row].map((seat,index) => (
                    <button
                    key={`${index}-${row}`}
                    type='button'
                    className={`seat ${(selectedSeats.includes(`${row}-${index}`) || newSelectedSeats.includes(`${row}-${index}`)) ? "selected" : ""} ${(lockedSeats[`${row}-${index}`] || newLockedSeats[`${row}-${index}`])? "locked" : ""}`}
                    onClick={() => toggleSeatSelection(row, index)}
                    disabled={newLockedSeats[`${row}-${index}`]}
                    name={row}
                    >
                    {seat}
                    </button>
                )):
                <div></div>
                }
                </div>
            )):
            <Design word={'go back'} url={`/home`}/>
          }
        {/* <div style={{width:'auto',height:'auto',backgroundColor:'green'}}> */}
          <button style={{width:'auto',height:'2.2rem',backgroundColor:'green',padding:'4px',
            borderRadius:'0.8rem',fontSize:'x-large',marginTop:'2rem'}}
            onClick={makePayment}> Pay Now </button>
        {/* </div> */}
      </div>
    </div>
  )
}

export default BookAtTheatre
