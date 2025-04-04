import React,{useState} from 'react'
import Home from './pages/home'
import BsState from './context/BsState'
import Navbar from './components/navbar'
import NavbarJs from './components/navbarJs'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CompleteMovieCard from './components/completeMovieCard'
import Theatre from './components/theatre'
import BookAtTheatre from './components/bookAtTheatre'
import UserLogin from './user/userLogin'
import Admin from './adminPages/admin'
import CreateNewMovie from './adminPages/createNewMovie'
import SeatsCreation from './adminPages/seatsCreation'
import UserSignUp from './user/userSignUp'
const App = () => {
  const [state,setState] = useState('');
  const [city,setCity] = useState('');
  return (
    // <div>
    //     <NavbarJs/>
       
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path='/signUp' element={<BsState><UserSignUp /></BsState>}/>
      <Route path='/' element={<BsState><UserLogin /></BsState>}/>
      <Route path='/dashboard' element={<BsState><Admin/></BsState>} />
      <Route path='/newMovie..' element={<BsState><CreateNewMovie /></BsState>}/>
      <Route path='/newMovie../seats' element={<BsState><SeatsCreation/></BsState>}/>
      <Route path='/state'  element={<BsState><Navbar state={state} setState={setState} city={city} setCity={setCity}/></BsState>}/>
      <Route path='/home/booking/theatre'  element={<BsState><BookAtTheatre city={city}/></BsState>}/>
      <Route path='/home/booking'  element={<BsState><Theatre city={city}/></BsState>}/>
      <Route path='/city' element={<BsState><NavbarJs state={state} setState={setState} city={city} setCity={setCity}/></BsState>}/>
      <Route path='/home/cardMovie' element={<BsState><CompleteMovieCard /></BsState>}/>
      <Route path='/home' element={<BsState>
        <Home city={city}/> 
      </BsState>}
      />
    </Routes>
    </BrowserRouter>
  )
}

export default App

