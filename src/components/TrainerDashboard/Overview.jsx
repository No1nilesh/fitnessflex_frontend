import React from "react";

import "react-big-calendar/lib/css/react-big-calendar.css";

import ReactBigCalendar from "../TrainerDashboard/Calender/ReactBigCalendar";

function Overview() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className=" bg-gradient-to-r from-[#384BD6] to-[#1EB1BA]    rounded-lg p-3 relative">
          <h3 className="text-lg font-medium text-white mb-4">Clients</h3>
          <p className="text-4xl font-bold text-white">14</p>
        </div>

        <div className=" bg-gradient-to-r from-[#384BD6] to-[#1EB1BA]  rounded-lg p-3 relative">
          <h3 className="text-lg font-medium text-white mb-4">Workouts</h3>
          <p className="text-4xl font-bold text-white">25</p>
        </div>

        <div className=" bg-gradient-to-r from-[#384BD6] to-[#1EB1BA] rounded-lg p-3 relative">
          <h3 className="text-lg font-medium text-white mb-4">Meal Plans</h3>
          <p className="text-4xl font-bold text-white">8</p>
        </div>

        <div className=" bg-gradient-to-b from-[#252835] to-[#273F94] border-[rgba(255,255,255,0.1)] md:col-span-2   shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-white mb-4">Calender</h3>
        <div className="w-[100%] h-[20rem]">
          <ReactBigCalendar />
        </div>
      </div>

      <div className=" bg-gradient-to-b from-[#252835] to-[#273F94] border-[rgba(255,255,255,0.1)]    shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-white mb-4">h1</h3>
        <h1>head1</h1>
      </div>
      </div>
      
   
    </div>
  );
}

export default Overview;
