import {  React,useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/fitnesslogo.png";

function Navbar() {

// const [openNav, setopenNav] = useState(false)
const Navlist = useRef()
const handleClick=()=>{
Navlist.current.classList.toggle("open")
}

  return (
    <>

        <nav className=" md:flex justify-around items-center gap-2 shadow-lg z-[100] fixed top-0 rounded-md text-gray-200 w-full bg-[hsl(232,54%,11%)] ">
          <div className="logo flex items-center gap-1 ">
          <Link to={"/"}>

            <img src={logo} className=" m-[2px] w-16 " alt="" />
          </Link>
            {/* <div className="  text-2xl">FITNESS FLEX</div> */}
          </div>
          <ul className="md:flex flex-col gap-2 justify-center items-center  text-lg md:flex-row py-2 hidden navlist md:visible" ref={Navlist} >
            <li className="w-full md:max-w-fit px-2">
              <Link to="/ ">Home</Link>
            </li>
            {/* <li className="w-full md:max-w-fit  px-2">
              <Link to="/services">Services</Link>
            </li> */}
            <li className="w-full md:max-w-fit  px-2">
              <Link to="/about">About</Link>
            </li>
            <li className="w-full md:max-w-fit  px-2">
              <Link to="/Signup">Register</Link>
            </li>
         
          </ul>

        <button className="hamburger absolute  z-10 flex flex-col gap-[0.3rem] top-[8px] right-3 cursor-pointer  md:hidden" onClick={handleClick} >
            <span className="line w-7 h-[2px] bg-slate-50 rounded"></span>
            <span className="line w-7 h-[2px] bg-slate-50 rounded"></span>
            <span className="line w-7 h-[2px] bg-slate-50 rounded"></span>
          </button> 
        </nav>
        

    </>
  );
}

export default Navbar;
