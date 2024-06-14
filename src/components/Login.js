import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background "
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="text-3xl font-bold py-y ">Sign in</h1>
        <input type="text" placeholder="Email" className="p-2 m-2 w-full" />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full"
        />
        <button className="p-2 m-2 w-full bg-red-700">Sing in</button>
      </form>
    </div>
  );
};

export default Login;
