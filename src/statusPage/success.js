import React,{useContext} from 'react'
import '../Css/success.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import BsCxt from '../context/Bscontext';
import Design from '../components/design';
import Radiocomponent from '../components/radiocomponent';


const Success = () => {
  
const context = useContext(BsCxt);
const {ticket} = context;

const handleChangeScreen = ()=>{

}

  return (
    <div className='container-c'>
      <div className='container-class'>
          {/* <FontAwesomeIcon className='correct' icon={faCircleCheck} size="lg" color="green"/>
          <div className='tickets-window-list'>
            {
              ticket ?
               ticket.map((tc,index)=>{
                return (
                  <div style={{display:'flex',flexDirection:'column'}}>
                     <Radiocomponent text={tc} key={index} data={'x'} extra={{}} changeSelection={handleChangeScreen}/>
                  </div>
              )
               }):
               <Design word={'go back'} url={``}/>
            }
          </div> */}
      </div>
    </div>
  )
}

export default Success
