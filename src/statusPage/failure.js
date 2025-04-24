import React,{useContext,useEffect,useState} from 'react'
import '../Css/failure.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import BsCxt from '../context/Bscontext';
import Design from '../components/design';
import Radiocomponent from '../components/radiocomponent';
import { useNavigate } from 'react-router-dom';

const Failure = () => {

  const context = useContext(BsCxt);
// const [newSelectedSeats,setNewSelectedSeats] = useState([]);
// const [newLockedSeats,setNewLockedSeats] = useState({});
const navigate = useNavigate();
const {setSelectedSeats,setLockedSeats,newSelectedSeats,city} = context;
const [ticket,setTicket]=useState([]);
const handleChangeScreen = ()=>{

}

  useEffect(()=>{
    setTicket(newSelectedSeats);
    newSelectedSeats.forEach((element)=>{
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
  },[])
   
  //navigate to home page.
  const routeToHome=()=>{
    navigate('/home',{replace:true});
  }


  return (
    <div className='container-c'>
          <div className='nav-section'>
            <div className='logo-section'>🎬mOvIe</div>
            <div className='location-section' style={{marginLeft:'6rem'}}>{city}</div>
            <div className='choose-location'>🛖</div>
            <div className='logout' onClick={routeToHome}>Logout</div>
         </div>
         <br/>
      <div className='container-f'>
          <FontAwesomeIcon className='correct' icon={faCircleXmark} size="lg" color="red"/>
          <span style={{height:'auto',fontSize:'x-large',marginBottom:'1rem',fontWeight:'bold',color:'red'}}>Payment Failed</span>
          <div className='tickets-window-list'>
            {/* {
              ticket ?
               ticket.map((tc,index)=>{
                return (
                  <div style={{display:'flex',flexDirection:'column'}}>
                     <Radiocomponent text={tc} key={index} data={'x'} extra={{}} changeSelection={handleChangeScreen}/>
                  </div>
                  )
               }):<div></div>
              } */}
              <Design word={`go back`} url={`/bookedSeats`}/>
          </div>
      </div>
    </div>
  )
}

export default Failure
