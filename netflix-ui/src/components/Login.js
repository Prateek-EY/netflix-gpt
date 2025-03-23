import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/fireBase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch =  useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate the form data
   const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message);
    if(message) return;
    //sign in or sign up

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      updateProfile(user, {
        displayName: name.current.value
      }).then(() => {
         const { uid, email, displayName } = auth.currentUser;
         dispatch(addUser({uid: uid, email: email,displayName: displayName}));
      }).catch((error) => {
       
      });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
}
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
  }
    
  };
  return (
    <div>
        <Header className=''/>
    <div className='absolute'>
      <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_large.jpg" alt='logo'></img>
    </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4 text-white'>
        {isSignInForm ? "Sign In":"Sign Up"}
        </h1>
        {!isSignInForm && <input ref={name} type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-700">
          </input>}
        <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700">
        </input>
        <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700">
        </input>
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
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