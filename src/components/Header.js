import { useEffect, useState } from "react";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants.";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
const navigate=useNavigate();
const dispatch=useDispatch();
const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const user=useSelector((store)=>store.user);
  const handleSignOut = () => {
   
    signOut(auth).then(() => {
    
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
       
      }
    });
    return() => unsubscribe();
  },[]);
  const handleGptSearchClick=()=>{
    //toggle gpt button
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }
  
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={LOGO}
 alt="logo" className="w-44"/>
 {user && <div className="flex p-2">
  {showGptSearch && <select className="p-2 m-4 bg-gray-900 bg-opacity-75 rounded-lg text-white" onChange={handleLanguageChange}>
   {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier}value={lang.identifier}>{lang.name}</option>)}
  </select>}
 
  <button className="py-2 px-4 m-4 text-white mx-4 my-4 border border-red-900 rounded-md" onClick={handleGptSearchClick}> {showGptSearch?"Home":"GPT Search"}</button>
  <img src={USER_AVATAR} alt="user" className="w-10 h-10 mt-4 cursor-pointer " onClick={toggleDropdown}/>
  {showDropdown && (
          <div className="absolute right-6 top-20 bg-red-700 text-white mt-1 w-50 rounded bg-opacity-70">
            <ul>
              <li className=" p-2 cursor-pointer font-bold" onClick={handleSignOut}>Sign out</li>
            </ul>
          </div>
        )}

  
 </div>}
    </div>
  )
}

export default Header
