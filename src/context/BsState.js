import { useEffect, useState } from "react";
import BsCxt from "./Bscontext";

const BsState = (props)=>{
    const [email,setEmail] = useState('');
    const [token,setToken] = useState('');
    const [country,setCountry] = useState('');
    const [movieName,setMovieName] = useState('');
    const [listMovieDown,setListMovieDown]=useState(null); //this is used in home for storing movies coming from backend
    const [adminBigList,setAdminBigList] = useState([]);
    const [changeform,setChangeForm] = useState({movieName:'',theatre:'',
          startDate:'',endDate:'',genre:'',slots:'',ratings:'',description:'',city:'',location:''}) //this is used in admin side in create new movie for creating a movie
    const [rowNums,setRowNums] = useState([]); //this is used in admin side for creation of seats by user
    const [index,setIndex] = useState('');  //this is used 
    const [message, setMessage] = useState('');
    const [city,setCity] = useState('');
    const [state,setState] = useState('');
    const [url,setUrl] = useState('');
    const [stateList,setStateList] = useState('');
    const [cityList,setCityList] = useState('');
    const [completeDataList,setCompleteDataList] = useState(null);
    const [movieList,setMovieList] = useState(null);
    const [completeMovieDetails,setCompeletMovieDetails] = useState('');
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [lockedSeats, setLockedSeats] = useState({});

    return(
        <BsCxt.Provider value = {{email,setEmail,token,setToken,country,setCountry,stateList,setStateList,cityList,movieName,setMovieName,
            setCityList,movieList,setMovieList,completeMovieDetails,setCompeletMovieDetails,city,setCity,state,setState,url,setUrl,
            message,setMessage,completeDataList,setCompleteDataList,index,setIndex,listMovieDown,setListMovieDown,
            adminBigList,setAdminBigList,rowNums,setRowNums,changeform,setChangeForm,
            selectedSeats,setSelectedSeats,lockedSeats,setLockedSeats}}>{props.children}</BsCxt.Provider>
    )
}
export default BsState;

// movie,locationList,setLocationList,setMovieList,movieList,screen,changeScreen,
//             location,setLocation,createRazorPayOrder,paymentFetch,completeMovieList,setCompleteMovieList,q,setQ,lq,setLq,
//             changeMovie,time,changeTime,cinema,changeCinema,noOfSeat,changeNoOfSeats,cinemaList,setCinemaList,
//             lastBookingDetails,handleGetBooking,handlePostBooking,errorMessage,errorPopup,screenList,setScreenList,seatsList,setSeatsList,
//             setErrorMessage,setErrorPopup,selectedSeats, setSelectedSeats,lockedSeats,slotList,setSlotList,
//             setLockedSeats


// const [errorPopup,setErrorPopup]= useState(false)
//     const [errorMessage,setErrorMessage] = useState("")
//     const [movie,changeMovie] = useState('');
//     const [ids,changeIds] = useState('');
//     const [cinema,changeCinema] = useState('');
//     const [time,changeTime] = useState('');
//     const [screen,changeScreen] = useState('');
//     const [location,setLocation] = useState('');
//     const [cinemaList,setCinemaList] = useState([]);
//     const [locationList,setLocationList] = useState([]);
//     const [screenList,setScreenList] = useState([]);
//     const [slotList,setSlotList] = useState([]);
//     const [seatsList,setSeatsList] = useState([]);
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [lockedSeats, setLockedSeats] = useState({});
//     const [responseId, setResponseId] = useState("");
//     const [responseState, setResponseState] = useState([]);
//     const [movieList,setMovieList] = useState([]);
//     const [completeMovieList,setCompleteMovieList] = useState([]);
//     const [q,setQ] = useState("");
//     const [lq,setLq] = useState("");

//     let res={};
//     const [noOfSeat,changeNoOfSeats]  = useState({
//         "A":[],
//         "B":[],
//         "C":[],
//         "D":[],
//         "E":[],
//         "F":[],
//         "G":[],
//         "H":[],
//         "I":[],
//         "J":[],
//     });

//     const loadingScript = (src)=>{
//         return new Promise((resolve)=>{
//             const script = document.createElement("script");
//             script.src=src;
//             script.onload=()=>{
//                 resolve(true);
//             }
//             script.onerror=()=>{
//                 resolve(false);
//             }
//             document.body.appendChild(script);
//         })
//     }

//     const createRazorPayOrder = async(amount)=>{
        
//         let config={
//             method:"Post",
//             maxBodyLength:Infinity,
//             headers:{
//                 'Content-Type':'application/json',
//             },
//             body:JSON.stringify({
//                 amount:amount,
//                 currency:"INR",
//             }),
//         }
//         fetch(`http://localhost:8000/orders`,config)
//         .then((res)=>{
//             console.log(JSON.stringify(res))
//             // handleFunction(res.data.amount)
//         })
//         .catch((error)=>{
//            console.log("error at",error)
//         })
        
//     }

//     const handleFunction = async(amount)=>{
//         const res = await loadingScript("https://checkout.razorpay.com/v1/checkout.js")
//         if(!res){
//             alert("some error at razorpay screen loading")
//             return;
//         }
//         const options = {
//             key:"",
//             amount:amount,
//             currency:"INR",
//             name:"pawan sharma",
//             description:"payment to pawa sharma",
//             image:"",
//             handler: function (response){
//                 setResponseId(response.razorpay_payment_id);
//             },
//             prefill:{
//                 name:"pawan sharma",
//                 email:"pawansharma02020200@gmail.com"
//             },
//             theme:{
//                 color:"#F4C430"
//             }
//         }
//         const paymentObject = new window.Razorpay(options)
//         paymentObject.open()
//     }

//     const paymentFetch=(e)=>{
//         e.preventDefault();
//         const paymentId = e.target.paymentId.value;
//         fetch(`http://localhost:8000/payment/${paymentId}`,{
//             method:'Get',
//         })
//         .then((response)=>{
//             console.log(response.data);
//             setResponseState(response.data);
//         })
//     }



    
//     const [lastBookingDetails,setLastBookingDetails] = useState(null);
//     const handlePostBooking = async()=>{
//         const response = await fetch(`http://localhost:8000/api/booking`,{
//             method:"Post",
//             headers:{
//                 "Content-Type":"application/json",
//             },
//             body:JSON.stringify({movie:movie,cinema:cinema,slot:time,seats:noOfSeat}),
//         })
//         const data  = await response.json();
//         setErrorPopup(true)
//         setErrorMessage(data.message)
//         const rr = data.data.seats;
//         // console.log(data.data)
//         let newArr={};
//        console.log(Object.keys(rr).length);
//             setSelectedSeats((prev) => {
//                 let newSelection = [];
//                 for(const key in rr){
//                     if(rr[key].length>0){
//                             newArr[key] = rr[key];
//                             for(let i=0;i<rr[key].length;i++){
//                                 newSelection = prev.includes(`${key}-${rr[key][i]}`)
//                                   ? prev.filter((s) => s !== `${key}-${rr[key][i]}`)
//                                   : [...prev, `${key}-${rr[key][i]}`];
//                                   setLockedSeats((prevLocks) => {
//                                     const newLocks = { ...prevLocks };
//                                     if (!prev.includes(`${key}-${rr[key][i]}`)) {
//                                       newLocks[`${key}-${rr[key][i]}`] = true;
//                                       setTimeout(() => {
//                                         setLockedSeats((locks) => {
//                                           const updatedLocks = { ...locks };
//                                           delete updatedLocks[`${key}-${rr[key][i]}`];
//                                           window.localStorage.clear()
//                                           return updatedLocks;
//                                         });
//                                       }, 3600000);
//                                     }
//                                     return newLocks;
//                                 });
//                             }

//                         }
//                     }
//                     return newSelection;
//             });
      
        
       
//         if(response.status === 200){
//             changeNoOfSeats({
//                 "A":[],
//                 "B":[],
//                 "C":[],
//                 "D":[],
//                 "E":[],
//                 "F":[],
//                 "G":[],
//                 "H":[],
//                 "I":[],
//                 "J":[],
//             });
//             changeIds(data.data._ids)
//             window.localStorage.setItem("ids",data.data._ids)
//             setLastBookingDetails({movie:data.data.movie,cinema:data.data.cinema,slot:data.data.slot,seats:newArr,ids:data.data._id})
//             console.log(newArr);
//             window.localStorage.clear()
//             handleGetBooking();
//         }
//     }
//     const handleGetBooking = async()=>{
//         const response = await fetch(`http://localhost:8000/api/booking`,{
//            method:"Get",
//         })
//         .then(response => response.json())  // Convert response to JSON
//         .then(data => {
//             // console.log(data.data);
//             res = data.data;   // ✅ Debugging
//             // setSsts([...data.data]);     // ✅ Save in state
//         })
//         .catch(error => console.error("Error fetching data:", error));

//         // const data = response.json()
//         console.log(res);
//         // console.log(res);
//         setSelectedSeats([]);
//         setLockedSeats({});
//         if(res!=null){

//             setSelectedSeats((prev) => {
//                 let newSelection = [];
//                 for(let i = 0;i<Object.keys(res).length;i++){
//                     if(res[i]["movie"] === movie && res[i]["slot"]===time && res[i]["cinema"]===cinema){

//                         for(const key in res[i]["seats"]){
//                             const arr = res[i]["seats"][key];
//                             if(arr.length>0){
                                
//                                 for(let j=0;j<arr.length;j++){
//                                     newSelection = prev.includes(`${key}-${arr[j]}`)
//                                     ? prev.filter((s) => s !== `${key}-${arr[j]}`)
//                                     : [...prev, `${key}-${arr[j]}`];
//                                     setLockedSeats((prevLocks) => {
//                                         const newLocks = { ...prevLocks };
//                                         if (!prev.includes(`${key}-${arr[j]}`)) {
//                                             newLocks[`${key}-${arr[j]}`] = true;
//                                             setTimeout(() => {
//                                                 setLockedSeats((locks) => {
//                                                     const updatedLocks = { ...locks };
//                                                     delete updatedLocks[`${key}-${arr[j]}`];
//                                                     window.localStorage.clear()
//                                                     return updatedLocks;
//                                                 });
//                                             }, 3600000);
//                                         }
//                                         return newLocks;
//                                     });
//                                 }
                                
//                             }
//                         }
//                     }
//                 }
//                     return newSelection;
//         });
//     }
//         // setLastBookingDetails(data)
//     }
    