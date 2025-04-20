import React, { useContext } from 'react'
// import { slots } from '../datas'
import Radiocomponent from './radiocomponent'
import '../Css/TimeSchedule.css'
import BsCxt from '../context/Bscontext'

const TimeSchedule = () => {
  const context = useContext(BsCxt)
  const {time,changeTime,slotList} = context
  const handleChangeItem = (val)=>{
    changeTime(val)
    window.localStorage.setItem("slot",val)
  }
  // const slots=[];
  return (
    <>
    <div className='slot_container'>
       <h1 className='TS_heading'>Select A Schedule</h1>
       <div className='TS_main_container'>
        {slotList.map((el,index)=>{
          return (
            <Radiocomponent text={el} key={index} data={time} extra={{}} changeSelection={handleChangeItem}/>
          )
        })}</div>     
    </div>
    </>
  )
}

export default TimeSchedule
