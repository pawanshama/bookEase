import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'
import '../Css/userLogin.css'
import BsCxt from '../context/Bscontext';

const UserLogin = () => {
    
    const [volunteer, setVolunteer] = useState({ email: '', password: '',country:'' });
    // const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const context = useContext(BsCxt)
    const {setEmail,setToken,setCountry,setMessage,message} = context;

    //handles form inputs 
    const handleChange = (e) => {
        setVolunteer((preData)=>({ ...preData, [e.target.name]: e.target.value }));
      };

      //handles form on submit
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
         
          const response = await axios.post('http://localhost:8000/user/login', volunteer )
          console.log('successfully done connection');
      
          const {success,message,responsibility} = await response.data;
          console.log(success);
          if(responsibility==='true'){
            setMessage('Sign In successful.You are logged in.');
            setTimeout(() => {
              setEmail(volunteer.email);
              setToken(message)
              setCountry(volunteer.country)
              navigate('/dashboard');
          }, 2000);
          }
          else if (responsibility==='false') {
            setMessage('Sign In successful. You are logged in.');
            setTimeout(() => {
              setEmail(volunteer.email);
              setToken(message)
              setCountry(volunteer.country)
              navigate('/state');
          }, 2000);
          } else {
            setMessage('Error during sign-up. Try again.');
            console.log(message);
          }
        } catch (error) {
          setMessage(error);
        }
      };

      useEffect(()=>{
          
      },[message])
      // style={{backgroundColor:'blue'}}
  return (
    <div className='container'>
     <div className='sign-in'>
        <form onSubmit={handleSubmit} className='form-box'>
           <div className='logo-section-this'>🎬mOvEi</div>
           {
             message.length>0 ? 
               <div style={{backgroundColor:'#fff',fontSize:'large',color:'black',fontWeight:'bold'}}>
                  {message}
               </div>
             : 
               <div></div>
           }
           <div className='personal'>
            <input style={{color:'rgb(223, 228, 234)',fontFamily:'sans-serif'}}
            placeholder='email or userID' 
            type="email" 
            name="email" 
            value={volunteer.email} 
            onClick={(e)=>e.target.style={color:'black'}}
            onChange={handleChange} />
           </div>

           <div className='personal'>
            <input style={{color:'rgb(223, 228, 234)',fontFamily:'sans-serif'}}
            placeholder='password' 
            type="password" 
            name="password" 
            value={volunteer.password}
            onClick={(e)=>e.target.style={color:'black'}} 
            onChange={handleChange} />
           </div>

           <div className='personal'>
            <input style={{color:'rgb(223, 228, 234)',fontFamily:'sans-serif'}}
            placeholder='country Name' 
            type="text" 
            name="country" 
            value={volunteer.country}
            onClick={(e)=>e.target.style={color:'black'}} 
            onChange={handleChange}/>
           </div>
         {/* <div style={{display:'flex',flexDirection:'column'}}> */}
           <div style={{color:'black',backgroundColor:'#fff'}}>
             <button type='submit' >Login </button>
           </div>
           <div style={{color:'black',backgroundColor:'#fff'}}>
             <button type='submit' >
           <Link className='mid' to = {`/signUp`} style={{color:'black',backgroundColor:'rgb(223, 228, 234)',
            textDecoration:'none',fontFamily:'sans-serif'}}>SignUp</Link></button>
           </div>
         {/* </div> */}
           <div style={{color:'black',backgroundColor:'#fff'}}>
              <Link className='mid' to = {`/`} style={{color:'black',backgroundColor:'#fff',
                textDecoration:'none',fontFamily:'sans-serif'}}>forget password</Link>
           </div>
        </form>
     </div>
    </div>
  )
}

export default UserLogin