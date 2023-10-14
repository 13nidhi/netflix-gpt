import React, { useState , useRef} from 'react';
import Header from './Header';
import {checkValidateData} from "../utils/validate";
//import {useNavigate } from 'react-router-dom';
//For Sign In And Sign UP Password  authentication
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  //const navigate = useNavigate();
  const [isSignForm,setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null); 
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignForm)
  }

  const handleButtonClick = () =>{
    //validate Form data
    const emailValue = email.current ? email.current.value : "";
    const passwordValue = password.current ? password.current.value : "";
    const nameValue = name.current ? name.current.value : "";

    const message = isSignForm
    ? checkValidateData(emailValue, passwordValue)
    : checkValidateData(emailValue, passwordValue, nameValue);

    setErrorMessage(message);

    if (message) { //if there is a string in error message then return simply
      return; // Stop further execution if there's an error message
    }

    if (isSignForm) {
      // Sign In Logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
          if(errorCode === "auth/invalid-login-credentials"){
            setErrorMessage("Invalid login Credentials");
          }
          
        });
    } else if(!isSignForm){
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);

          updateProfile(auth.currentUser, {
            displayName: nameValue, photoURL: "https://avatars.githubusercontent.com/u/47038775?v=4"
          }).then(() => {
            // Profile updated! then again update the profile by calling action and  then navigate
            //here we are geeting the data from new auth user created, why we are using auth but not user 
            // bcoz it is having  updated data 
            const {uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));

            // navigate("./browser");
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          setErrorMessage(errorCode + errorMessage);
        });
    }

    // if(isSignForm) {
    //   const message = checkValidateData(email.current.value, password.current.value);
    //   setErrorMessage(message);
    //   if (message) return;

    //    //Sign In Logic 
    //    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    //    .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode );
    //     setErrorMessage(errorCode + errorMessage);
    //   });
    

    // }
    // else if(!isSignForm)
    // {
    //   const message = checkValidateData(email.current.value, password.current.value, name.current.value);
    //   setErrorMessage(message);
    //   if (message) return;

    // //  Sign Up Logic
    //   createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    //   .then((userCredential) => {
    //     // Signed up 
    //     const user = userCredential.user;
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     setErrorMessage(errorCode + errorMessage);
    //   });
    // }
    
  }

  return (
  <div className=''>
    <Header />
    <div className='absolute '>
      <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt='Logo'
      />
    </div>

    <form 
      onSubmit={(e)=> e.preventDefault()}
      className="absolute w-4/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
    >
      <h1 className='font-bold py-4 text-3xl'>
        {isSignForm ? "Sign In" : "Sign Up"}
      </h1>

      {!isSignForm && (
      <input 
        type='text' 
        ref={name}
        placeholder='Full Name' 
        className='p-4 my-4 w-full bg-zinc-800 rounded-md'
      />
      )}

      <input 
        type='text' 
        ref={email}
        placeholder='Email Address' 
        className='p-4 my-4 w-full bg-zinc-800 rounded-md'
      />

      <input 
        type='text' 
        ref={password}
        placeholder='Password' 
        className='p-4 my-4 w-full bg-zinc-800 rounded-md'
      />
      <p className='text-red-500'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-md' onClick={handleButtonClick}>
          {isSignForm ? "Sign In" : "Sign Up"}
        </button> 

      <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {
          isSignForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."
        }
        
      </p>
    </form>
  </div>

  )
}

export default Login;