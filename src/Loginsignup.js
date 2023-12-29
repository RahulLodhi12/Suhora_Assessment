import React, { useState } from 'react'
import './Loginsignup.css'
import user_icon from './person.png';
import email_icon from './email.png';
import password_icon from './password.png';


const Loginsignup = () => {

    const [action,setaction]=useState("Signup");
  return (
    <div className='container'>
    <div className="header">
        <div className='text'>{action}</div>
        <div className='underline'></div>
    </div>
      <div className='inputs'>{action=='Login'?<div></div>:<div className='input'>
            <img src={user_icon} alt='/'/>
            <input type='text' placeholder='Name' />
        </div>}
        
        <div className='input'>
            <img src={email_icon} alt='/'/>
            <input type='email' placeholder='Email-Id' />
        </div>
        <div className='input'>
            <img src={password_icon} alt='/'/>
            <input type='password' placeholder='Password'/>
        </div>
      </div>
      {action=='Signup'?<div></div>:<div className='forget-password'><p className='text-center'>Forget password? Click here</p></div>}
      
      <div className='submit-container'>
        <div className={action==='Login'?"submit gray":"submit"} onClick={()=>{setaction("Signup")}}>Sign up</div>
        <div className={action==="Signup"? "submit gray" : "submit"} onClick={()=>{setaction("Login")}}>Login</div>
      </div>

    </div>
  )
}

export default Loginsignup
