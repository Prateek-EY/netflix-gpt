import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { removeUser } from '../utils/userSlice';
import { toggleGptSearchView }from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constant';

const Header = () => {
  const navigate =  useNavigate();
  const user =  useSelector(store => store.user);
  const dispatch = useDispatch();
  const showGSearch =  useSelector(store => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const { uid, email, displayName } = user;
            dispatch(addUser({uid: uid, email: email,displayName: displayName}));
            navigate("/browse");
        } else {
            dispatch(removeUser());
            navigate("/");
         
        }
      });
      //Un Subscribe when Component Un Mounts.
      return  () => unsubscribe();
}, []);

const handleGptSearchClick = () => {
  dispatch(toggleGptSearchView());
};
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between"> 
      <img className="w-44" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo">
      </img>
      { user && <div className='flex p-2'>
        { showGSearch && <select className='p-2 m-2 bg-gray-900 text-white'>
          {SUPPORTED_LANGUAGES.map(lang => <option key= {lang.identifier} value={lang.identifier}>{lang.name}</option> )}
        </select>}
        <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGptSearchClick}>{showGSearch ? "HomePage":"GPT Search"}</button>
        <img className="w-12 h-12"
          src="https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
          alt="usericon"
        >
        </img>
        <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
      </div>
}
    </div>
  )
};

export default Header;