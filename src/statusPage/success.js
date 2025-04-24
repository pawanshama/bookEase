import React,{useContext, useEffect, useState} from 'react'
import '../Css/success.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import BsCxt from '../context/Bscontext';
import Design from '../components/design';
import Radiocomponent from '../components/radiocomponent';
import { useNavigate } from 'react-router-dom';


const Success = () => {
  
const context = useContext(BsCxt);
// const [newSelectedSeats,setNewSelectedSeats] = useState([]);
// const [newLockedSeats,setNewLockedSeats] = useState({});
const navigate = useNavigate();
const {setSelectedSeats,setLockedSeats,
  newSelectedSeats,city,email,selectedSeats,lockedSeats} = context;
const [ticket,setTicket]=useState(newSelectedSeats);
const [listOfBookedSeats,setListOfBookedSeats] = useState(null);
const [bookingConfirmed,setBookingConfirmed] = useState(false);
      // useEffect(()=>{
      //    const fetchFunction = async() => {
      //     console.log('I entered into user-booking-view-page');
      //         try{
      //             // const data = await fetch(`http://localhost:8000/create-checkout-sessions/get?email=${email}`,{
      //             //     method:'Get'
      //             // });
      //             // const res = await data.json();
      //             // setListOfBookedSeats(res.data);

      //             const sessionId = new URLSearchParams(window.location.search).get("session_id");

      //             const response = await fetch(`/api/check-booking?session_id=${sessionId}`);
      //             const data = await response.json();

      //             if (data.bookedAlready) {
      //               // ✅ Restore user state in frontend (e.g., set `bookedAlready = true` in your context or UI)
      //             }
      //         }catch(err){
      //             console.log("error occured while fetching users booked seats in theatre");
      //         }
      //    }
      //   fetchFunction()
      // },[])

      // ✅ Get session_id from URL



const sessionId = new URLSearchParams(window.location.search).get("session_id");
console.log(sessionId);

// ✅ Ask backend: was this booking successful?
useEffect(() => {
  if (sessionId) {
    fetch(`http://localhost:8000/api/check-booking?session_id=${sessionId}`)
      .then(res => res.json())
      .then(data => {
        if (data.bookedAlready.booked) {
          // ✅ Set frontend state to show booking confirmed
          console.log(data.bookedAlready);
          setListOfBookedSeats(data.bookedAlready);
          setBookingConfirmed(true); // Your React state
        } else {
          // Booking not confirmed yet
          console.log(data.bookedAlready);
          console.log('error inside')
          setBookingConfirmed(false);
        }
      });
  }
}, [sessionId]);

      useEffect(()=>{
          console.log(listOfBookedSeats);
      },[])
const handleChangeScreen = ()=>{

}

  useEffect(()=>{
    setTicket(listOfBookedSeats);
    if(listOfBookedSeats){

      listOfBookedSeats.forEach((element)=>{
        setSelectedSeats((prev)=>{
          const newSelection = prev.includes(element)
          ? prev.filter((s) => s !== element)
          : [...prev, element];
          
          setLockedSeats((prevLocks) => {
          const newLocks = { ...prevLocks };
          if (!prev.includes(element)) {
            newLocks[element] = true;
          }
          return newLocks;
        });
        return newSelection;
      })
    })
  }
  },[listOfBookedSeats])
   
  //navigate to home page.
  const routeToHome=()=>{
    navigate('/home',{replace:true});
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
       {/* </div>   <div> */}
      <div className='container-c'>

        <div className='container-f'>
            <FontAwesomeIcon className='correct' icon={faCircleCheck} size="lg" color="green"/>
          <span style={{fontSize:'x-large',fontWeight:'bold',height:'auto',marginBottom:'1rem'}}>Payment Successful</span>
          <div className='tickets-window-list'>
              {
                ticket ?
                ticket.map((tc,index)=>{
                  return (
                    <div style={{display:'flex',flexDirection:'column'}}>
                      <Radiocomponent text={tc} key={index} data={'x'} extra={{}} changeSelection={handleChangeScreen}/>
                    </div>
                    )
                  }):<div></div>
                }
                <Design word={`go back`} url={`/bookedSeats`}/>
            </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Success
