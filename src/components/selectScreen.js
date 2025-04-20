import React,{useContext} from 'react'
import "../Css/selectScreen.css"
import Radiocomponent from './radiocomponent';
import BsCxt from '../context/Bscontext';

const SelectScreen = () => {
    const context= useContext(BsCxt);
    const {screen,changeScreen,screenList} = context;
    // const cinemaList=[];
    const handleChangeScreen=(val)=>{
        changeScreen(val)
        
        window.localStorage.setItem("screen",val)
    }
  return (
    <>
       <h1 className='SM_heading'>Select A Screen :- </h1>
       <div className='SM_main_container'>
        {screenList.map((el,index)=>{
            return (
                <Radiocomponent text={el} key={index} data={screen} extra={{}} changeSelection={handleChangeScreen}/>
            )
        })}
    </div> 
    </>
  )
}

export default SelectScreen
