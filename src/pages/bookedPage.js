import React, { useContext, useEffect, useState } from 'react'
import BsCxt from '../context/Bscontext'
import { useNavigate } from 'react-router-dom';

const BookedPage = () => {
    const context = useContext(BsCxt);
    const navigate = useNavigate();
    const {email} = context;
    const [listOfBookedSeats,setListOfBookedSeats] = useState(null);
    useEffect(()=>{
       const fetchFunction = async() => {
        console.log('I entered into user-booking-view-page');
            try{
                const data = await fetch(`http://localhost:8000/create-checkout-sessions?email=${email}`,{
                    method:'Get'
                });
                const res = await data.json();
                setListOfBookedSeats(res);
            }catch(err){
                console.log("error occured while fetching users booked seats in theatre");
            }
       }
     fetchFunction()
    },[])
  return (
    <div>
        {
            listOfBookedSeats ?
             listOfBookedSeats[0].map((block)=>(
                  <li>
                      {
                        block.length>0 ?
                          block.seats.map((seat)=(
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

export default BookedPage
