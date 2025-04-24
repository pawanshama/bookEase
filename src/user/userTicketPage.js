import React, { useContext, useEffect, useState } from 'react'
import BsCxt from '../context/Bscontext'
import { useNavigate } from 'react-router-dom';

const UserTicketPage = () => {
  const context = useContext(BsCxt);
      const navigate = useNavigate();
      const {email} = context;
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
        if (data.bookedAlready) {
          // ✅ Set frontend state to show booking confirmed
          setBookingConfirmed(true); // Your React state
        } else {
          // Booking not confirmed yet
          setBookingConfirmed(false);
        }
      });
  }
}, [sessionId]);

      useEffect(()=>{
          console.log(listOfBookedSeats);
      },[])
    return (
      <div>
          {
              listOfBookedSeats ?
               listOfBookedSeats[0].map((block)=>(
                    <li>
                        {
                          block.length>0 ?
                            block.seats.map((seat)=>(
                              <li>{seat}</li>
                            )):
                            <li></li>
                        }
                    </li>
               )):
               <div>No Movies are here</div>
          }
      </div>
    )
}

export default UserTicketPage
