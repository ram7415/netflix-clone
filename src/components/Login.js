import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
  };
  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background "
        />
      </div>
      <form
        className="absolute p-12 py-12 bg-black w-4/12 my-36  mx-auto right-0 left-0 text-white bg-opacity-70 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl font-bold py-4  ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="p-4 my-4 w-full  bg-gray-700 rounded-lg"
          />
        )}
        <input
          useRef={email}
          type="text"
          placeholder="Email Addresss"
          className="p-4 my-4 w-full  bg-gray-700 rounded-lg"
        />
        <input
          useRef={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-4 my-6 w-full bg-red-700 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"} onClick={handleButtonClick}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? " New to Netflix? Sign Up Now"
            : "Already a User? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
