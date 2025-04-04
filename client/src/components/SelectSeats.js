import React, { useContext } from 'react'
import { seats } from '../datas'
import SeatInput from './SeatInput'
import '../Css/SelectSeats.css'
import BsCxt from '../context/Bscontext'

const SelectSeats = () => {
  const context = useContext(BsCxt)
  const {noOfSeat,changeNoOfSeats} = context
  

  return (
    <>
    <div className='SS_wrapper'>
        <h1 className='SS_heading'>Select Seats</h1>
        <div className='SS_main_container'>
            {seats.map((el,index)=>{
              return(
                <SeatInput key={index} text={el} noOfSeat={noOfSeat} changeNoOfSeats={changeNoOfSeats}/>
              )
            })}
        </div>
    </div>
    </>
  )
}

export default SelectSeats
