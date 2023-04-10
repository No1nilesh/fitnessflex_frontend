import React, { useEffect } from "react";
import search from "../../assets/search.svg";
import threedot from '../../assets/threedot.png'
import { toast } from "react-toastify";
import IncomeChart from "./tranactiondata/IncomeChart";
import { useSelector, useDispatch } from "react-redux";

import { loadFinancialData } from "../../actions/adminAction";



function CenterContent({user , members ,setCurrentContent}) {
const dispatch = useDispatch();

useEffect(() => {
dispatch(loadFinancialData());
}, [])

const {incomedata, loading}= useSelector((state)=>state.fetchIncome)

if(!members && !incomedata && loading){
  return <>loading...</>
}

  return (
    <>
      <div className=" justify-self-center text-white col-span-3 ">
        <div className="flex justify-center flex-wrap flex-col items-center">
          {/* search box and heading */}
          <div>
            {/* heading */}
            <h2 className="text-center my-3 text-[1.3em] font-bold">
             { `Welcome ${user.name} !`}
            </h2>

            {/* searchbox */}
            <div className="relative flex justify-end items-center lg:m-2 w-[100%]">
              <input
                type="text"
                placeholder="eg:search something..."
                className="bg-[#460F54] border border-[rgba(255,255,255,0.1)] outline-none 
          focus:outline-none  w-[22rem] md:w-[20rem] lg:w-[40rem] p-1 rounded-md shadow-inner text-white 
           placeholder:text-[#5b2568] placeholder:text-center"
              />
              <img src={search} className="absolute m-2 w-5" alt="" />
            </div>
          </div>

          {/* members */}
          <h1 className="self-start ml-2">Members</h1>
          <div className="members flex flex-wrap gap-2 lg:flex-nowrap justify-center">
            {/* members list */}
            <div className=" bg-gradient-to-r from-[#384BD6] to-[#1EB1BA] w-[95%] lg:w-[18rem]  min-h-[8rem] rounded-lg p-3  relative flex justify-center">
            <img src={threedot} className="absolute w-8 right-0" alt="" />
              <h2 className="text-center">Member List</h2>

              <div className="flex gap-2 justify-center absolute bottom-2 items-center ">
              {/* button */}
                <button onClick={()=> setCurrentContent("Showallmember")} className=" text-xs bg-[#1EB1BA] rounded-md drop-shadow-lg p-2  border border-[rgba(255,255,255,0.3)]">
                  Show All
                </button>

                <button onClick={()=> setCurrentContent("Showallnewmember")} className=" text-xs bg-[#384BD6] rounded-md drop-shadow-lg p-2  border border-[rgba(255,255,255,0.3)]">
                  New List
                </button>
              </div>

            </div>

            {/* New members */}
            <div className=" bg-gradient-to-r from-[#384BD6] to-[#1EB1BA] w-[95%] lg:w-[18rem] min-h-[8rem] rounded-lg p-3 relative">
            <img src={threedot} className="absolute w-8 right-0" alt="" />
              <h2 className="text-center">New Members</h2>
              <div className="flex gap-2 justify-center">
               <span className="absolute bottom-2 text-4xl text-gray-300">{members ? members.new_members.length : "loading..."}</span>
              </div>
            </div>

            {/* total members */}
            <div className=" bg-gradient-to-r from-[#384BD6] to-[#1EB1BA] w-[95%] lg:w-[18rem] min-h-[8rem] rounded-lg p-3 relative">
            <img src={threedot} className="absolute w-8 right-0" alt="" />

              <h2 className="text-center">Total Member</h2>
              <div className="flex gap-2 justify-center">
              <span className="absolute bottom-2 text-4xl text-gray-300">{members ? members.member_count : "loading..."} <small className="text-sm">members</small> </span>
              </div>
            </div>
          </div>

          {/* Analytics */}
          <h1 className="self-start ml-2 mt-2">Analytics</h1>

          {/* expected ratio */}
          <div className="members flex flex-wrap gap-2 justify-center  lg:flex-nowrap">

            <div className=" bg-gradient-to-r from-[#384BD6] to-[#1EB1BA] w-[95%] lg:w-[27.5rem] min-h-[22rem] rounded-lg p-3 relative grid place-content-center">
           
           <div className="p-2 border-[8px] border-[#384BD6] rounded-full grid place-content-center h-[145px] drop-shadow-lg">
            <h2 className="text-center">Total Revenue</h2>  
            <span className="text-4xl text-gray-300">{incomedata ?  incomedata.totalIncome/100 : "...loading"}₹</span>
           </div>
            </div>

            {/* Monthly income             */}
            <div className=" bg-gradient-to-r from-[#384BD6] to-[#1EB1BA] w-[95%] lg:w-[27.5rem] min-h-[22rem] rounded-lg p-3 relative">
            <img src={threedot} className="absolute w-8 right-0" alt="" />
              <h2 className="text-center">Monthly Income</h2>
             <IncomeChart/>
              <div className="flex gap-2 justify-center h-full items-center">
              <h2 className=" absolute bottom-12 text-center">This Month Income</h2>  
              <span className="absolute bottom-2 text-4xl text-gray-300">{incomedata ?  incomedata.monthlyIncome/100 : "...loading"}₹</span>
              {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam enim ea tempore repellat, alias distinctio hic perspiciatis sapiente laboriosam a illo velit modi quod fugiat aut, accusantium placeat itaque temporibus. */}
              </div>
            </div>  
          </div>
        </div>
      </div>
    </>
  );
}

export default CenterContent;
