import {useEffect} from "react";

import "react-big-calendar/lib/css/react-big-calendar.css";

import ReactBigCalendar from "../TrainerDashboard/Calender/ReactBigCalendar";
import Carousel from "./Corsel";
import { getCount, getAssign } from "../../actions/trainerAction";

import { useDispatch, useSelector} from "react-redux";
import Loader from "../utility/Loader";


function Overview({user}) {

  const dispatch = useDispatch();
  const {aloading , member} = useSelector((state)=>state.loadAssign)    
  const {count} = useSelector((state)=>state.loadcount)    

    useEffect(() => {
        dispatch(getAssign())
        dispatch(getCount());
        }, [])

if(aloading || !member || !count){
  return <Loader/>
}

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className=" bg-gradient-to-r from-[#384BD6] to-[#1EB1BA]    rounded-lg p-3 relative">
          <h3 className="text-lg font-medium text-center text-white mb-4">Clients</h3>
          <p className="text-4xl font-bold text-center text-white">{member.length}</p>
        </div>

        <div className=" bg-gradient-to-r from-[#384BD6] to-[#1EB1BA]  rounded-lg p-3 relative">
          <h3 className="text-lg font-medium  text-center text-white mb-4">Workouts</h3>
          <p className="text-4xl font-bold  text-center text-white">{count.workout.length}</p>
        </div>

        <div className=" bg-gradient-to-r from-[#384BD6] to-[#1EB1BA] rounded-lg p-3 relative">
          <h3 className="text-lg font-medium  text-center text-white mb-4">Meal Plans</h3>
          <p className="text-4xl font-bold  text-center text-white">{count.diet.length}</p>
        </div>

        <div className=" bg-gradient-to-b from-[#252835] to-[#273F94] border-[rgba(255,255,255,0.1)] md:col-span-2   shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-white mb-4">Calender</h3>
        <div className="w-[100%] h-[20rem]">
          <ReactBigCalendar />
        </div>
      </div>

      <div className=" bg-gradient-to-b from-[#252835] to-[#273F94] border-[rgba(255,255,255,0.1)]    shadow rounded-lg p-6 flex justify-between flex-col items-center gap-3 relative">
      <h2 className="justify-self-start text-2xl">Assigned Member</h2>
       <Carousel  member={member} aloading={aloading}/>
      </div>
      </div>
      
   
    </div>
  );
}

export default Overview;
