import React, { useEffect } from 'react'
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo } from '../utils/Constants';
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user); 
    const handleSignOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
          }).catch((error) => {
            // An error happened.
            navigate("/error")
          });
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in/ signed up see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL:photoURL}));
              navigate("/browse");
            
              // ...
            } else {
              // User is signed out
                dispatch(removeUser);
                navigate("/");
            }
          });
          
          //The cleanup function in your useEffect hook is called when the component unmounts to ensure the onAuthStateChanged
          //listener is properly removed, avoiding any unwanted memory usage or updates. This helps keep the application 
          //efficient and prevents bugs caused by updates to unmounted components.
          return () => unsubscribe();
    },[])
  return (
    <div className='Header absolute  bg-gradient-to-b from-black w-full z-10 flex justify-between'>
        <img className='w-44 ' alt='netlflix-logo'
        src={Logo}/>

        {user && (<div className='flex p-5' onClick={handleSignOut}>
        {user?.photoURL && (<img alt="usericon" className="w-12 h-12 p-2 mr-3" src={user.photoURL} />)}
            <button className='bg-red-600 px-3 rounded-lg font-semibold text-white'>Sign Out</button>
        </div>)}
    </div>

  )
}

export default Header;