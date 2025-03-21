import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
        <Header className=''/>
    <div className='absolute'>
      <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_large.jpg" alt='logo'></img>
    </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4 text-white'>
        {isSignInForm ? "Sign In":"Sign Up"}
        </h1>
        {!isSignInForm && <input type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-700">
          </input>}
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700">
        </input>
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700">
        </input>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In":"Sign Up"}
        </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{
        isSignInForm ? "New to Netflix? Sign Up Now": "Already registered? Sign In Now.."}
        </p>
      </form>
    </div>
  )
};

export default Login;