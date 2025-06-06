import React from 'react'
import '../Css/radioComponent.css'

const Radiocomponent = ({text,changeSelection,data,key}) => {
  const handleChecked=(val)=>{
    changeSelection(val)
    // console.log(extra.length)
  }

  return (
    <div style={{backgroundColor:'#fff',width:'auto',height:'auto'}}>
      <div className={`form_check_label ${data === text ? "active":"inactive"}`} onClick={()=>{handleChecked(text)}}>
          <span name={data} className='text' >{text}</span>
      </div>
    </div>
  )
}

export default Radiocomponent
