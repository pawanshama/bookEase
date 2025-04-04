// import { useContext } from "react";
// import BsCxt from "./context/Bscontext";
// const context = useContext(BsCxt);
// const {movie,cinema,time,location,screen} = context;

// let cinemaList = ['Elements-Mall-Inox','rajMandir','pink-Square-Inox','WTP-Inox','cinepolis'];
// const theatre = require("../../server/models/theatre");

// let slots = ['10:00AM','01:00 PM','03:00PM','08:00 PM'];
let seats = ['A','B','C','D','E','F','G','H','I','J'];


// let movieList=[];
// let data = await fetch(`http://localhost:8000/api/movieSearch`,{
//     method:"Get",
// })
// movieList = data.data;
// if(!movieList) movieList = ['no-movie'];



// let cinemaList =[]
// if(location && movie){
//     let r= await fetch(`http://localhost:8000/api/theatreSearch`,{
//         method:"Get",
//         'Content-type':'applicaton/json',
//         data:JSON.stringify({
//             movie:movie,
//             location:location,
//         })
//     })
//     cinemaList = r;
// }

// let playScreen =[]
// if(movie && location && cinema){
//     let r = await fetch(`http://localhost:8000/api/screenSearch`,{
//         method:"Get",
//         'Content-type':'applicaton/json',
//         data:JSON.stringify({
//             movie:movie,
//             location:location,
//             theatre:cinema,
//         })
//     })
//     playScreen = r;
// }
    
// let slots = []
// if(){

//     let r = await fetch(`http://localhost:8000/api/slotSearch`,{
//         method:"Get",
//         'Content-type':'applicaton/json',
//         data:JSON.stringify({
//             movie:movie,
//             location:location,
//             theatre:cinema,
//             screen:screen
//         })
//     })
// }
    
// let seat = await fetch(`http://localhost:8000/api/seatsSearch`,{
//     method:"Get",
//     "Content-type":"applicaton/json",
//     data:JSON.stringify({
//          movie:movie,
//          location:location,
//          theatre:cinema,
//          screen:screen,
//          slot:time
//     })
// })

// let price = await fetch(`http://localhost:8000/api/movieSearch`,{
//     method:"Get",
// })

// exports.movieList = movieList
// exports.slots = slots
exports.seats = seats
// exports.cinemaList = cinemaList 


//I want movies to be shown 
//I want location of the theatre
//I want theatres to be listed for that perticular movie
//I want slots for movie
//I want screen 
//I want seats available