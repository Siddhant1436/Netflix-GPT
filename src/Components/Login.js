import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
  return (
    <div>
        <Header />
        
        <div className='absolute w-full h-full' >
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg'
         className='w-full h-full object-cover'
        />
        </div>
        
        <form className='w-3/12 absolute bg-black p-12 my-40 right-0 left-0 mx-auto text-white rounded-lg bg-opacity-75'>
            
            <h1 className='font-bold text-3xl'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {
                !isSignInForm &&<input type='text' placeholder='Enter your Full Name' className='p-4 my-4 w-full bg-gray-600'/>
            }
            <input type='text' placeholder='Enter your Email' className='p-4 my-4 w-full bg-gray-600'/>
            
            <input type='password' placeholder='Enter your Password' className='p-4 my-4 w-full bg-gray-600'/>
            
            <button className='p-4 my-4 w-full bg-red-500 rounded-lg' >
            {isSignInForm? "Sign In":"Sign Up"}</button>

            <p className="cursor-pointer py-4 text-gray-400"onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign UP":"Already an existing user? Sign In"}</p>
            
        </form>
        
    </div>
  )
}

export default Login;