import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uuid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen py-2 bg-gradient-to-b from-black to-transparent  z-10 flex flex-col md:flex-row justify-between ">
    <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
       <div className="flex  md:gap-2  justify-between ">
          {showGptSearch && (
            <select
                className="py-0 px-8 mx-2 md:mx-2  hover:bg-white hover:text-black md:px-4  my-4 mb-5 bg-red-500 text-white rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-8 mx-2 md:mx-2 hover:bg-white hover:text-black md:px-4  my-4 mb-5 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPTSearch"}
          </button>
          {!showGptSearch? <button
            onClick={handleSignOut}
            className="py-2 px-10 mx-2 md:px-4  my-4 mb-5 hover:bg-white rounded bg-red-500 hover:text-black"
          >
            SignOut
          </button>:'null'}
          <img alt="usericon"   className="w-12 h-10 my-4   rounded-xl  hidden md:inline-block" src={user?.photoURL} />
        </div>
      )}
    </div>
  );
};

export default Header;