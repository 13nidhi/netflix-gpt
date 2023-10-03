import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignForm,setIsSignForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignForm)
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
    <form className="absolute w-4/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
      <h1 className='font-bold py-4 text-3xl'>
        {isSignForm ? "Sign In" : "Sign Up"}
      </h1>
      {!isSignForm && (
      <input 
        type='text' 
        placeholder='Full Name' 
        className='p-4 my-4 w-full bg-zinc-800 rounded-md'
      />
      )}
      <input 
        type='text' 
        placeholder='Email Address' 
        className='p-4 my-4 w-full bg-zinc-800 rounded-md'
      />

      <input 
        type='text' 
        placeholder='Password' 
        className='p-4 my-4 w-full bg-zinc-800 rounded-md'
      />

      {isSignForm ? 
        <button className='p-4 my-6 bg-red-700 w-full rounded-md'>Sign In</button> 
        : 
        <button className='p-4 my-6 bg-red-700 w-full rounded-md'>Sign Up</button>
      }
      <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {
          isSignForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."
        }
        
      </p>
    </form>
  </div>

  )
}

export default Login