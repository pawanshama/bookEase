import React, { useContext } from 'react'
import '../Css/bookAtTheatre.css'
import BsCxt from '../context/Bscontext';
const rows = [
  { id: 'J', seats: [16, 15, 14, 13] },
  { id: 'I', seats: [18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4] },
  { id: 'H', seats: [18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4] },
  { id: "G", seats: [18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4] },
  { id: "F", seats: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { id: "E", seats: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { id: "D", seats: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { id: 'C', seats: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { id: "B", seats: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { id: "A", seats: [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
];
let r=null;
const BookAtTheatre = (props) => {
    const context = useContext(BsCxt);
    const {completeDataList,city,index} = context;
    if(!r && index!==''){
      r = completeDataList.filter((prev)=>prev.movieName.trim()===index)[0].seats
      console.log(r)
      
    }
    // const {city} = props
  return (
    <div>
          <div className='nav-section'>
          <div className='logo-section'>🎬logo</div>
            {/* <input placeholder='state Name...' className='input-section'/> */}
            <div className='location-section' style={{marginLeft:'6rem'}}>{city}</div>
            <div className='choose-location'>🛖</div>
         </div>
         <br/>
         Hello.........
         <div className="seat-container">
           <div className="screen-panel">All eyes this way please!</div>
          
            {r && Object.keys(r).map((row) => (
                <div key={row.id} className="row">
                <span className="row-label">{row.id}</span>
                <br/>
                <hr/>
                <br/>
                {r[row].map((seat) => (
                    <button
                    key={seat}
                    className={`seat`}
                    name={row.id}
                    >
                    {seat}
                    </button>
                ))}
                </div>
            ))}
      </div>
      <button style={{width:'auto',height:'2.2rem',backgroundColor:'green',padding:'4px',
        borderRadius:'0.8rem',marginLeft:'17rem',marginTop:'2rem',marginBottom:'3rem',fontSize:'x-large'}}> Pay Now </button>
    </div>
  )
}

export default BookAtTheatre
