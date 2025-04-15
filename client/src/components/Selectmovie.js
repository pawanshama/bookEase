import React, { useContext } from 'react'
import Design from './design'
import '../Css/SelectMovie.css'
import BsCxt from '../context/Bscontext'
import CardMovie from '../cardDesign/cardMovie'
import { useNavigate } from 'react-router-dom'

const Selectmovie = (props) => {
  const context= useContext(BsCxt);
  const navigate=useNavigate();
  const {move} = props
  
  return (
    <>
    <h1 className='SM_heading-movie'>Something New :- </h1>
    <div className='SM_main_container-movie'>
        {move? move.map((el,index)=>{
            return (
                <CardMovie text={el} key={index}/>
            )
        }):
        (
          <>
             <h1 className='SM_heading-movie'>No movies listed :- </h1>
             <div style={{height:"100%",width:'100%',justifyContent:'center',alignItems:'center'}} >
                <button type='button' >
                  <Design word='go back'/>
                </button>
             </div>
          </>
        )
        }
    </div>
    </>
  )
}

export default Selectmovie

{/* <CardMovie text={el.movie} key={index} data={movie} extra={[el]} changeSelection={handleChangeMovie}/> */}