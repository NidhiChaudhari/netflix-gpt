import { useEffect, useState } from "react";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants.";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
const navigate=useNavigate();
const dispatch=useDispatch();

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
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={LOGO}
 alt="logo" className="w-44"/>
 {user && <div className="flex p-2">
  <img src={USER_AVATAR} alt="user" className="w-10 h-10 cursor-pointer " onClick={toggleDropdown}/>
  {showDropdown && (
          <div className="absolute right-6 top-14 bg-red-700 text-white mt-1 w-50 rounded shadow-lg ">
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
