import React, { useContext } from 'react'
// import Radiocomponent from './radiocomponent'
// import { movieList } from '../datas'
import '../Css/SelectMovie.css'
import BsCxt from '../context/Bscontext'
import CardMovie from './cardMovie'

const Selectmovie = (props) => {
  const context= useContext(BsCxt);
  // let movieList=[];
  const {move} = props
  // const movieFunc=async()=>{
  //   let data = await fetch(`http://localhost:8000/api/movieSearch`,{
  //       method:"Get",
  //   })
  //   movieList=data;
  // }

  // const handleChangeMovie=(val)=>{
  //   changeMovie(val)
  //   setQ(val)
  //   window.localStorage.setItem("movie",val)
  // }
  return (
    <>
    <h1 className='SM_heading-movie'>Something New :- </h1>
    <div className='SM_main_container-movie'>
        {move.length>0 && move.map((el,index)=>{
            return (
                <CardMovie text={el} key={index}/>
            )
        })}
    </div>
    </>
  )
}

export default Selectmovie

{/* <CardMovie text={el.movie} key={index} data={movie} extra={[el]} changeSelection={handleChangeMovie}/> */}