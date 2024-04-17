import { useState } from "react";
import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
const navigate=useNavigate();


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const user=useSelector((store)=>store.user);
  const handleSignOut = () => {
   
    signOut(auth).then(() => {
     navigate("/");
   
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
 alt="logo" className="w-44"/>
 {user && <div className="flex p-2">
  <img src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e" alt="user" className="w-10 h-10 cursor-pointer " onClick={toggleDropdown}/>
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
