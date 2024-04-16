import { useState } from "react";
import Header from "./Header";


const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true);
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    
    <div>
     <Header/>
     <div className="absolute">
     <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg"/>
     </div>
     <form className="absolute p-12  bg-black  w-4/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-sm">
        <h1 className="font-bold text-3xl text-center py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>

        {!isSignInForm && (<input type="text" placeholder="Name" className="p-3 my-4 w-full rounded-sm bg-opacity-60 bg-gray-600"/>)}
        <input type="email" placeholder="Email" className="p-3 my-4 w-full rounded-sm bg-opacity-60 bg-gray-600"/>
        <input type="password" placeholder="Password" className="p-3 my-4 w-full rounded-sm bg-opacity-60 bg-gray-600"/>
        <button className="p-3 my-6 bg-red-700 w-full rounded-sm">
        {isSignInForm?"Sign In":"Sign Up"}</button>
        <p onClick={toggleSignInForm} className="cursor-pointer">{isSignInForm?"New to Netflix? Sign up now.":"Already registered?Sign In Now."}</p>
     </form>
    </div>
    
  )
}

export default Login;
