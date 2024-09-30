import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidation } from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,  updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import Browse from './Browse';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errMsg, setErrMsg] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {
        const msg = checkValidation(email.current.value, password.current.value);
        setErrMsg(msg);

        if(msg) return;

        //Sign In/ Sign Up logic

        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");

                    // set the displayName
                    updateProfile(user, {
                        displayName: name.current.value, 
                        photoURL: "https://mirimstudent25.wordpress.com/wp-content/uploads/2013/10/movietalk-despicableme630-jpg_002144.jpg"
                      }).then(() => {
                        // Profile updated!
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL:photoURL}));
                        navigate("/browse");
                      }).catch((error) => {
                        // An error occurred
                        // ...
                      });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMsg(errorMessage);
                    // ..
                });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMsg(errorMessage);
                });
        }

    }
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

  return (
    <div>
        <Header />
        
        <div className='absolute w-full h-full' >
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg'
         className='w-full h-full object-cover' alt='netlflix bg'
        />
        </div>
        
        <form className='w-3/12 absolute bg-black p-12 my-40 right-0 left-0 mx-auto text-white rounded-lg bg-opacity-75'>
            
            <h1 className='font-bold text-3xl'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            
            {!isSignInForm &&<input ref={name} type='text' placeholder='Enter your Full Name' className='p-4 my-4 w-full bg-gray-600'/>}
            
            <input ref={email} type='text' placeholder='Enter your Email' className='p-4 my-4 w-full bg-gray-600'/>
            
            <input ref={password} type='password' placeholder='Enter your Password' className='p-4 my-4 w-full bg-gray-600'/>
            
            <p className='text-red-500'>{errMsg}</p>
           
            {/* By explicitly setting type="button", the button no longer acts as a submit button, and it won't trigger 
            the form submission or refresh the page when clicked. */}
            <button type="button" className='p-4 my-4 w-full bg-red-500 rounded-lg' onClick={handleButtonClick}>
           
            {isSignInForm? "Sign In":"Sign Up"}</button>

            <p className="cursor-pointer py-4 text-gray-400"onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign UP":"Already an existing user? Sign In"}</p>
            
        </form>
        
    </div>
  )
}

export default Login;