import {  React,useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/FITNESS.png";

function Navbar() {

// const [openNav, setopenNav] = useState(false)
const Navlist = useRef()
const handleClick=()=>{
Navlist.current.classList.toggle("open")
}

  return (
    <>
   
        <nav className="bg-purple-400 md:flex justify-around items-center border border-purple-300 gap-2 drop-shadow-md relative ">
          <div className="logo flex items-center gap-1 my-3">
            <img src={logo} className=" w-12 rounded-full" alt="" />
            <div className="text-white  text-2xl">FITNESS FLEX</div>
          </div>
          <ul className="md:flex flex-col gap-2 justify-center items-center text-white text-lg md:flex-row py-2 hidden navlist md:visible" ref={Navlist} >
            <li className="w-full md:max-w-fit px-2">
              <Link to="/ ">Home</Link>
            </li>
            <li className="w-full md:max-w-fit  px-2">
              <Link to="/services">Services</Link>
            </li>
            <li className="w-full md:max-w-fit  px-2">
              <Link to="/about">About</Link>
            </li>
            <li className="w-full md:max-w-fit  px-2">
              <Link to="/login">Login</Link>
            </li>
            <li className="w-full md:max-w-fit  px-2">
              <Link
                to="/signup"
                className="md:bg-green-600 rounded-lg md:p-1 md:border border-green-300 drop-shadow-md w-[100%]"
              >
                Sign Up
              </Link>
            </li>
          </ul>

        <button className="hamburger absolute  z-10 flex flex-col gap-[0.3rem] top-[28px] right-3 cursor-pointer  md:hidden" onClick={handleClick} >
            <span className="line w-7 h-[2px] bg-slate-50 rounded"></span>
            <span className="line w-7 h-[2px] bg-slate-50 rounded"></span>
            <span className="line w-7 h-[2px] bg-slate-50 rounded"></span>
          </button> 
        </nav>

    </>
  );
}

export default Navbar;
