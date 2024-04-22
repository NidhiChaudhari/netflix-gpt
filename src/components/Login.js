import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";



const Login = () => {

    const[errorMessage,setErrorMessage]=useState(null);
    const [isSignInForm,setIsSignInForm]=useState(true);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const handleBtnClick=()=>{

        
    //     //validate the form data
       const message= checkValidData(email.current.value,password.current.value);
    //    console.log(email.current.value+password.current.value+name.current.value);
   
        setErrorMessage(message);
        if(message) return;
        //sign in/sign up logic
        if(!isSignInForm){
//sign up logic
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            
   
    }).catch((error) => {
      // An error occurred
    setErrorMessage(error.message);
    });
    // Signed up 
  
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage);
    console.log(errorMessage);
  });
        }else{
//sign in logic

signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });
        }

        
    }
   
   
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
    
  
  return (
    
    <div>
     <Header/>
     <div className="absolute">
     <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg" />
     </div>
     <form onSubmit={(e)=>e.preventDefault()} className="absolute p-12  bg-black  w-4/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-sm">
        <h1 className="font-bold text-3xl text-center py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>

        {!isSignInForm && (<input ref={name} type="text" placeholder="Name" className="p-3 my-4 w-full rounded-sm bg-opacity-60 bg-gray-600"/>)}
        <input ref={email} type="email" placeholder="Email" className="p-3 my-4 w-full rounded-sm bg-opacity-60 bg-gray-600"/>
        <input ref={password} type="password" placeholder="Password" className="p-3 my-4 w-full rounded-sm bg-opacity-60 bg-gray-600"/>
       <p className="text-red-500 text-center font-light text-sm">{errorMessage}</p> 
        <button className="p-3 my-6 bg-red-700 w-full rounded-sm" onClick={handleBtnClick}>
        {isSignInForm?"Sign In":"Sign Up"}</button>
        <p onClick={toggleSignInForm} className="cursor-pointer">{isSignInForm?"New to Netflix? Sign up now.":"Already registered?Sign In Now."}</p>
     </form>
    </div>
    
  )
}

export default Login;
