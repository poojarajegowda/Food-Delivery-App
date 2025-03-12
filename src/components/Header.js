import { LOGO_URL } from "../utils/constants";
import { useState,lazy, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

 const onlineStatus=useOnlineStatus();
  const display=onlineStatus?"✅":"🔴"
  
  const{LoggedInUser}=useContext(UserContext)
 

  return (
    <div className="flex justify-between p-3.5 bg-black text-white cursor-pointer font-bold text-xl
         sticky top-0 z-50">
      <div className="image_container">
        <img className="w-36" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4">Online Status: {display}</li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/">Home</Link></li>
          <li className="px-4">
            <Link to="/about">About Us</Link></li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link></li>
          <li className="px-4">Cart</li>
          <button
            className="px-4"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4">
            <Link to="/">{LoggedInUser}</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
