import React from "react";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './nav.css'
import AuthDetails from "./auth/AuthDetails";
import img from './logo1.png'
const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <>
      <nav className="flex items-center justify-between h-20  max-100% mx-100%">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="bg-gradient-to-br from-violet-900 to-purple-300 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl font-bold logo cursor-pointer tracking-wider">
              {/* Book Attic */}
              <img style={{height:"50px"}} src ={img}/>
            </h1>
          </div>
        </Link>
        <div className="flex list-none items-center space-x-6 mr-5 text-gray-700 -tracking-tighterr font-semibold">
          <Link to={"/"}>
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              Home
            </li>
          </Link>
          <Link to={"/genre"}>
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              Genre
            </li>
          </Link>
          <Link to={"/article"}>
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              Article
            </li>
          </Link>
          <Link to={"/toppicks"}>
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              Top picks
            </li>
          </Link>
          <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
          <div >
          {/* <div className="flex list-none items-center space-x-4 mr-5 text-gray-700 -tracking-tighterr font-semibold">
          <Link to={"/login"}>
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              Login
            </li>
          </Link>
         
          
          <Link to={"/register"}>
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              Register
            </li>
          </Link>
          </div> */}
          <div className="auth"><AuthDetails/></div>
          
          </div>
          <Link to={"/cart"}>
            <div style={{marginLeft:"1000%"}} className="relative">
              <ShoppingBasket className="text-2xl cursor-pointer hover:text-purple-600 transition transform duration-200" />

              {cart.length > 0 && (
                <div className="absolute bg-purple-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
                  {cart.length}
                </div>
              )}
            </div>
          </Link>
          
        </div>
        
        <div>
     
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;
