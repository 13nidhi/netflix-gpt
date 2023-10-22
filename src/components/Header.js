import React, { useEffect } from 'react'
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const user = useSelector((store)=> store.user);
//console.log(user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
     // dispatch(removeUser);  disatch will happen on (auth change in body useEffect onAuthstate changed) it will do automatically
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //console.log("Body auth", auth);
      if (user) {
        // User is signed in
        const {uid, email, displayName, photoURL } = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browser");  
      } else {
        // User is signed out
        dispatch((removeUser()));
        navigate("/");
      }
    });
    //this will be unsubscribe when component will unmount
    return () => unsubscribe();
  },[]);

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
        className='w-44'
        src={LOGO}
        alt="Logo"
      />
    { user && (
      <div className='flex p-4'>
        <img 
          className='w-12 h-12'
          src={user?.photoURL}
          alt='Usericon'
        />
        <button className='font-bold text-white'
          onClick={handleSignOut}
        >
          (Sign Out)
        </button>
      </div>
    )}
    </div>
  )
}

export default Header;