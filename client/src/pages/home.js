import React, { useContext, useState} from 'react'
import Selectmovie from '../components/Selectmovie'
import '../Css/Home.css'
import BsCxt from '../context/Bscontext'
// import listMovieDown from '../apicalls/move'
// import listMovie from '../apicalls/move'
// import LastBooking_details from '../components/LastBooking_details'
// import TimeSchedule from '../components/TimeSchedule'
// import SelectSeats from '../components/SelectSeats'
// import SeatBooking from '../components/seatBooking'
// import Cinemas from '../components/cinemas'
// import SelectScreen from '../components/selectScreen'
// import axios from "axios"

// const {movieList,setMovieList,setCompleteMovieList,screenList,setScreenList,screen,setSlotList,slotList} = context;
// const {locationList,setLocationList,cinemaList,setCinemaList,cinema,q,setQ,lq,setLq,seatsList,setSeatsList} = context;

// const {
//   movie,
//   // time,
//   // noOfSeat,
//   handlePostBooking,
//   setErrorPopup,
//   setErrorMessage,time,
//   responseId,responseState,createRazorPayOrder,paymentFetch,changeMovie,location,setLocation
// } = context



const Home = (props) => {
  const context = useContext(BsCxt)
  const {city,token,movieList,setMovieList} = context
  const [listMovieDown,setListMovieDown]=useState('');
  let t = 0;

  //function to call api to get data from backend
  const listMovieFunc = async()=>{
    try{
      const data = await fetch(`http://localhost:8000/movieFind/user?city=jaipur`,{
        method:'Get',
        headers:{
          "Content-Type": "application/json", 
          "authorization": `${token}` 
        }
      })
      const response = await data.json();
      setListMovieDown(response.data);
      console.log(token)
      console.log(response)
      t=1;
    }catch(err){
      console.log(err);
    }
  }
  //first time to call api after token received
  if(!listMovieDown){
    if(t===0)listMovieFunc();
    t=2;
  }
  // console.log(token)
  const [a,setA] = useState('');
  
  //first time to call Movie list when received from backend
  if(movieList.length===0 && listMovieDown.length > 0){
    setMovieList(listMovieDown);
  }
  
  //function to filter movie based on searches in search field
  const handleMovieContent=(e)=>{
      setMovieList(prev=>{
        const filterData = listMovieDown.filter((item) =>
          item.title.toLowerCase().includes(String(e.target.value)?.toLowerCase())
        );
         return filterData
      })
      setA(e.target.value)
  }

  return (
    <>
    {/* <div > */}
       <div className='nav-section'>
         <div className='logo-section'>🎬logo</div>
         <input placeholder='search movie.... ' value={a} onChange={handleMovieContent}/>
         <div className='location-section'>{city}</div>
         <div className='choose-location'>🛖</div>
       </div>
    {/* </div> */}
    <div className='container'>
       <Selectmovie move={movieList}/>

    </div>
</>
  )
}

export default Home
// if(!q){
//   let data;
//   const ru = async()=>{
//       data = await fetch(`http://localhost:8000/api/movieSearch`,{
//         method:"Get",
//       })
//       console.log(data);
//   }
//     data = data.json();
//     setQ(data);
// }

// const handleBookNow = ()=>{
  //     if(!movie){
    //       setErrorPopup(true)
//       setErrorMessage("Please select a movie")
//     }else{
  //       handlePostBooking()
  //     }
  
  // }  
  // const {city} = props;


  
  
  
  {/* <div className='wrapper'>
      <div className='select_movie_component'>
      <Cinemas />
      </div>
  </div> */}
  {/* <div className='time_seats_container'>
     <SelectScreen />
     <TimeSchedule/>
     <SeatBooking/>
      <button className='BN-btn' onClick={()=>{
        handleBookNow()
      }}>Book Now</button>
      </div> */}
  {/* <div>
    <button onClick={()=>createRazorPayOrder(100)}>pay the amount</button>
    {responseId && <p>{responseId}</p>}
    <h1>this is payment verification</h1>
    <form onSubmit={paymentFetch}>
        <input type='text' name='paymentId' />
        <button type='submit'>Fetch Payment</button>
        </form>
  </div> */}






// {/* <div className='container'>
//       <div className='search'>
//         <div className='s'>
//           <div style={{marginBottom:"0px", color:"black"}}>search Movie: <input type='text' name='searchMovie' value={q} onClick={movieFunc} onChange={(e)=>{setQ(e.target.value);changeMovie(e.target.value)}}/></div>
//           <div className='su'>
//             {
//                   !(movie.toLowerCase() === filteredData[0]) &&  <ul key={1} style={{color:"black",backgroundColor:"white"}} >{filteredData[0]}</ul>
            
//             }
//           </div>
//         </div>
//         <div className='l'>
//           <div style={{marginBottom:"0px", color:"black"}}>location:<input type='text' name='location' value={lq} onClick={locationFunc} onChange={(e)=>{setLq(e.target.value);setLocation(e.target.value)}}/></div>
//           <div>
//             {
//               !(location === unfilteredData[0]) &&  <ul key={1} style={{color:"black",backgroundColor:"white"}} >{unfilteredData[0]}</ul>
//             }
//           </div>
//         </div>
//       </div>
//        <Selectmovie />
//         <div className='wrapper'>
//             <div className='select_movie_component'>
//            {!cinemaList.length?<p onClick={locationFunc} type='submit' className='BN-btn' style={{}}>click for theares</p>:<Cinemas />}
//             </div>
//             {/* <div className='last_booking_details_container'>
//                 <LastBooking_details/>
//             </div> */}
//         </div>
//         <div className='time_seats_container'>
//         {!screenList.length?<button onClick={locationFunc} className='BN-btn'>click for screen</button>:<SelectScreen />}
//             {!slotList.length? <button onClick={locationFunc} className='BN-btn'>click for Slots</button>  :<TimeSchedule/>}
//             {!seatsList.length? <button onClick={locationFunc} className='BN-btn'>click for Screen</button>  :<SeatBooking/>}
//             <button className='BN-btn' onClick={()=>{
//               handleBookNow()
//             }}>Book Now</button>
//         </div>
//         <div>
//           <button onClick={()=>createRazorPayOrder(100)}>pay the amount</button>
//           {responseId && <p>{responseId}</p>}
//           <h1>this is payment verification</h1>
//           <form onSubmit={paymentFetch}>
//               <input type='text' name='paymentId' />
//               <button type='submit'>Fetch Payment</button>
//           </form>
//         </div>

//     </div> */}





//this i written above render

//   let area =[]
// if(movie){
//     let r = fetch(`http://localhost:8000/api/locationSearch`,{
//         method:"Get",
//         headers:{
//           'Content-Type':'applicaton/json',
//         },
//         data:JSON.stringify({
//             movie:movie,
//         })
//     })
//     area = r
//   }
// let filteredData=[]
// if(query !== movie){


//this is just now commented

//this is just now commented

//   const filteredData = movieList.filter((item) =>
//     item.toLowerCase().includes(String(q)?.toLowerCase())
//   );
// // }
//   const unfilteredData = locationList.filter((item) =>
//       item.toLowerCase().includes(lq.toLowerCase())
//   );
//   //for getting moviesList from backend
//   const movieFunc=async()=>{
//       let data = await fetch(`http://localhost:8000/api/search/movieSearch`,{
//         method:"Get",
//         headers:{
//           'Content-Type':'application/json',
//         },
//       })
//       const ls = await data.json();
//       // console.log(ls);
//       // ls.forEach(element=>{
//         // })
//         // setMovieList((prev)=>{
//           let n = [];
//         let ne = [];
//         ls.forEach(element => {
//           ne = ne.filter((ele)=>ele !== element.movie);
//           ne.push(element.movie);
//           n = n.filter((ele)=>ele.movie !== element.movie);
//           n.push(element);
//         });
//         // });
//       setCompleteMovieList(n);
//       setMovieList(ne)
//       // console.log(ne)
//     }
    
//   const locationFunc = async () => {

//     if(movie === filteredData[0] && filteredData[0]!==""){

//       let data = await fetch(`http://localhost:8000/api/search/locationSearch?movie=${movie}`,{
//         method:"Get",
//         headers:{
//           'Content-Type':'application/json',
//         },
//         // body:JSON.stringify({
//         //   movie:movie,
//         // }),
//       })
//       const ls = await data.json();
//       // console.log(ls);
      
//         let ne = [];
//         ls.forEach(element => {
//           ne = ne.filter((ele)=>ele !== element.location);
//           ne.push(element.location);
//         });
//         setLocationList(ne)
  
//       }

//       if(location === unfilteredData[0] && unfilteredData[0]!=="" && locationList.length>0){
//         let data = await fetch(`http://localhost:8000/api/search/theatreSearch?movie=${movie}&location=${location}`,{
//           method:"Get",
//           headers:{
//             'Content-Type':'application/json',
//           },
//         })
//         const ls = await data.json();
//         // console.log(ls);
        
//           let ne = [];
//           ls.forEach(element => {
//             ne = ne.filter((ele)=>ele !== element.theatre);
//             ne.push(element.theatre);
//           });
//           setCinemaList(ne)
//           // console.log(ne)
//         }
//       if(cinema && cinemaList.length>0){
//         let data = await fetch(`http://localhost:8000/api/search/screenSearch?movie=${movie}&location=${location}&theatre=${cinema}`,{
//           method:"Get",
//           headers:{
//             'Content-Type':'application/json',
//           },
//         })
//         const ls = await data.json();
//         // console.log(ls);
        
//           let ne = [];
//           ls.forEach(element => {
//             ne = ne.filter((ele)=>ele !== element.screen);
//             ne.push(element.screen);
//           });
//           let n=[];
//           ne[0].forEach(element => {
//             n = n.filter((ele)=>ele !== element);
//             n.push(Number(element));
//           });

//           setScreenList(n)
//           // console.log(ne[0]);
//           // console.log(ne)
//         }
//       if(screen && screenList.length>0){
//         let data = await fetch(`http://localhost:8000/api/search/slotSearch?movie=${movie}&location=${location}&theatre=${cinema}&screen=${[screenList]}`,{
//           method:"Get",
//           headers:{
//             'Content-Type':'application/json',
//           },
//         })
//         const ls = await data.json();
//         // console.log(ls);
        
//           let ne = [];
//           ls[0].slot.forEach(element => {
//             ne = ne.filter((ele)=>ele !== element);
//             ne.push(element);
//           });
//           setSlotList(ne)
//           // console.log(ne)
//         }
//       if(time && slotList.length>0){
//         let data = await fetch(`http://localhost:8000/api/search/seatsSearch?movie=${movie}&location=${location}&theatre=${cinema}&screen=${screenList}&slot=${slotList}`,{
//           method:"Get",
//           headers:{
//             'Content-Type':'application/json',
//           },
//         })
//         const ls = await data.json();
//         console.log(ls);
        
//           let ne = [];
//           ls.forEach(element => {
//             ne = ne.filter((ele)=>ele !== element);
//             ne.push(element);
//           });
//           setSeatsList(ne)
//           // console.log(ne)
//         }
        

//   }




//insidde render function
// <div className='container'>
// <Selectmovie />
//  <div className='wrapper'>
//      <div className='select_movie_component'>
//     {!cinemaList.length?<p onClick={locationFunc} type='submit' className='BN-btn' style={{}}>click for theares</p>:<Cinemas />}
//      </div>
//  </div>
//  <div className='time_seats_container'>
//  {!screenList.length?<button onClick={locationFunc} className='BN-btn'>click for screen</button>:<SelectScreen />}
//      {!slotList.length? <button onClick={locationFunc} className='BN-btn'>click for Slots</button>  :<TimeSchedule/>}
//      {!seatsList.length? <button onClick={locationFunc} className='BN-btn'>click for Screen</button>  :<SeatBooking/>}
//      <button className='BN-btn' onClick={()=>{
//        handleBookNow()
//      }}>Book Now</button>
//  </div>
//  <div>
//    <button onClick={()=>createRazorPayOrder(100)}>pay the amount</button>
//    {responseId && <p>{responseId}</p>}
//    <h1>this is payment verification</h1>
//    <form onSubmit={paymentFetch}>
//        <input type='text' name='paymentId' />
//        <button type='submit'>Fetch Payment</button>
//    </form>
//  </div>

// </div>