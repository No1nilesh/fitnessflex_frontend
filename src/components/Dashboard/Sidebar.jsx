import React, { useRef, useState, useEffect } from "react";
import analyticsImg from "../../assets/analytics.png";
import notification from "../../assets/notification.svg";
import members from "../../assets/people.png";
import money from "../../assets/money.svg";
import workout from "../../assets/workoutplan.png";
import plan from "../../assets/plann.svg";
import dashboard from "../../assets/dashboard.svg";
import bag from "../../assets/gymbag.svg";
import setting from "../../assets/setting.png";
import ham from '../../assets/ham.png'
import "./sidebar.css";
import Modal from "../utility/Modal";



function Sidebar({setCurrentContent}) {



  const SidebarRef = useRef(null)

  const handleSidebar=()=>{
    SidebarRef.current.classList.toggle("open")
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const date = new Date();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  var options = { year: "numeric", month: "long", day: "numeric" };

  return (
    <div>
      <img src={ham} onClick={handleSidebar}   className="z-40 left-2 w-8 fixed top-2 lg:hidden" alt="" />
      <div id="sidebar"  ref={SidebarRef} className=" z-30 lg:static fixed top-[-1px]  bg-gradient-to-b from-[#252835] to-[#273F94] w-[180px] h-[100vh] xl:h-[95svh] rounded-lg border border-[rgba(255,255,255,0.1)] flex flex-col items-center gap-3 drop-shadow-md lg:ml-3">
        <div className="flex gap-1 border border-[rgba(255,255,255,0.3)] px-2 py-[2px] rounded-md drop-shadow-md bg-gradient-to-r from-[#4d67aa7b] to-[rgba(255,255,255,0.1)] text-white mt-[2.5rem] ">
          <img src={dashboard} alt="" />
          <span className="">Dashboard</span>
        </div>

        <ul className="text-white px-4 flex flex-col gap-y-2 text-[0.85em]">

          <li onClick={() => setCurrentContent('centercontent')} className="flex items-center gap-[3px] cursor-pointer">
            <img className="w-[25px]" src={analyticsImg} alt="" />{" "}
            <span> Analytics</span>
          </li>
          <li onClick={() => setCurrentContent('Members')} className="flex items-center gap-[3px] cursor-pointer">
            <img className="w-[25px]" src={members} alt="" />{" "}
            <span> Trainers</span>
          </li>
          {/* <li  className="flex items-center gap-[3px] cursor-pointer">
            <img className="w-[25px]" src={workout} alt="" />{" "}
            <span> Workout Plans</span>{" "}
          </li> */}
          <li onClick={() => setCurrentContent('workoutplan')} className="flex items-center gap-[3px] cursor-pointer">
            <img className="w-[25px]" src={money} alt="" />{" "}
            <span> Payments Plans</span>
          </li>
          
          <li onClick={() => setCurrentContent('Membership')} className="flex items-center gap-[3px] cursor-pointer">
            <img className="w-[25px]" src={plan} alt="" />{" "}
            <span> Membership Plans</span>{" "}
          </li>
          <li className="flex items-center gap-[3px] cursor-pointer">
            <img className="w-[25px]" src={notification} alt="" />{" "}
            <span> Notifications</span>
          </li>
        </ul>
        {/* line */}
        <span className="bg-[rgba(255,255,255,0.3)] h-[1px] w-[90%] rounded-md" />
      
       
        {/* line */}
        {/* <span className="bg-[rgba(255,255,255,0.3)] h-[1px] w-[90%] rounded-md" /> */}

        <span className="text-[rgba(255,255,255,0.3)] text-sm ">
          <div className="text-center">{time.toLocaleTimeString()}</div>
          <div className="text-center"> {date.toLocaleDateString("en-US", options)}</div>
        </span>
        {/* line */}
        <span className="bg-[rgba(255,255,255,0.3)] h-[1px] w-[90%] rounded-md" />

        {/* setting */}
          <Modal isOpen={isOpen} onClose={toggleModal} />
        <span onClick={toggleModal} className=" text-white flex items-center gap-[3px] absolute bottom-3 cursor-pointer">
          <img className="w-[25px]" src={setting} alt="" />{" "}
          <span> Settings</span>
          {/* <ModalExample/> */}
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
