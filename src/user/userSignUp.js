import React,{useContext, useState} from 'react'
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import BsCxt from '../context/Bscontext';
import '../Css/userSignup.css'

const UserSignUp = () => {
    const [volunteer, setVolunteer] = useState({ name: '', email: '', password: '',country:'' });
    
    const navigate = useNavigate();
    const context = useContext(BsCxt)
    const {setMessage} = context
    // //handles page on successful signing of user
    // const handlePage=()=>{
    //     navigate('/state')
    // }

    //handles form inputs 
    const handleChange = (e) => {
        setVolunteer((preData)=>({ ...preData, [e.target.name]: e.target.value }));
      };

      //handles form on submit
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8000/user/signUp', volunteer);
          console.log('successfully done connection');
      
          const {success,message} = await response.data;
          console.log(success);
         
          if (success) {
            setMessage('Sign up successful. Please log in.');
            setTimeout(() => {
              navigate('/')
          }, 2000);
          } else {
            setMessage('Error during sign-up. Try again.');
            console.log(message);
          }
        } catch (error) {
          setMessage(error);
        }
      };
  return (
     <div className='container'>
         <div className='sign-in'>
    
            <form onSubmit={handleSubmit} className='form-box'>
               <div className='logo-section-this'>🎬mOvEi</div>
              <div className='personal'>
              <input style={{color:'rgb(223, 228, 234)',fontFamily:'sans-serif'}}
                placeholder='Username' 
                type="text" 
                name="name" 
                value={volunteer.name} 
                onChange={handleChange} />
               </div>
               <div className='personal'>
                <input style={{color:'rgb(223, 228, 234)',fontFamily:'sans-serif'}}
                placeholder='email or userID' 
                type="email" 
                name="email" 
                value={volunteer.email} 
                onChange={handleChange} />
               </div>

               <div className='personal'>
                <input style={{color:'rgb(223, 228, 234)',fontFamily:'sans-serif'}}
                placeholder='password' 
                type="password" 
                name="password" 
                value={volunteer.password} 
                onChange={handleChange} />
               </div>
    
               <div className='personal'>
                <input style={{color:'rgb(223, 228, 234)',fontFamily:'sans-serif'}}
                placeholder='country Name' 
                type="text" 
                name="country" 
                value={volunteer.country} 
                onChange={handleChange}/>
               </div>
             <div style={{display:'flex',flexDirection:'column'}}>
               <div style={{color:'black',backgroundColor:'#fff'}}>
              <button type='submit' style={{color:'black',backgroundColor:'red',padding:'0.3rem',width:'10rem',
                borderRadius:'12px',fontSize:'x-large',fontFamily:'sans-serif'}}>SignUp </button>
               </div>
               <div style={{color:'black',backgroundColor:'#fff'}}>
              <button type='submit' style={{color:'black',backgroundColor:'red',padding:'0.3rem',width:'10rem',
                borderRadius:'12px',fontSize:'x-large',fontFamily:'sans-serif'}}>
               <Link className='mid' to = {`/`} style={{color:'black',backgroundColor:'rgb(223, 228, 234)',
                textDecoration:'none',fontSize:'large',fontFamily:'sans-serif'}}>Login</Link></button>
               </div>
             </div>
               <div style={{color:'black',backgroundColor:'#fff'}}>
              <Link className='mid' to = {`/`} style={{color:'black',backgroundColor:'#fff',
                textDecoration:'none',fontFamily:'sans-serif'}}>forget password</Link>
               </div>
            </form>
         </div>
        </div>
  )
}

export default UserSignUp
