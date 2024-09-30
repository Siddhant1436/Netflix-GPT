import React from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {

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
  return (
    <div className='Header absolute  bg-gradient-to-b from-black w-full z-10 flex justify-between'>
        <img className='w-44 ' alt='netlflix-logo'
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'/>

        {user && (<div className='flex p-5' onClick={handleSignOut}>
        {user?.photoURL && (<img alt="usericon" className="w-12 h-12 p-2 mr-3" src={user.photoURL} />)}
            <button className='bg-red-600 px-3 rounded-lg font-semibold text-white'>Sign Out</button>
        </div>)}
    </div>

  )
}

export default Header;