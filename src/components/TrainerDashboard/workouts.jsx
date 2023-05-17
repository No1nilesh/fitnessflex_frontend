  import {useEffect} from 'react'
  import {  getAssign } from "../../actions/trainerAction";
  import Profile from "../../assets/Profile.png"
  import { useDispatch, useSelector} from "react-redux";
  import { useNavigate } from 'react-router-dom';
import Loader from '../utility/Loader';

function Workouts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {aloading , member} = useSelector((state)=>state.loadAssign)    

    useEffect(() => {
        dispatch(getAssign())
        }, [])

if(aloading || !member){
  return <Loader/>
}



    return (
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-medium text-gray-700">Workouts</h2>
        
          </div>
          <div className="bg-white shadow rounded-lg">
    <table className="w-full">
      <thead>
        <tr className="bg-gray-400 border-b border-blue-300">
          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
            Client
          </th>
          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
            Duration
          </th>
          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
            
          </th>
        </tr>
      </thead>

      {
        member.map((item)=>
        
        <tr className="bg-gray-100/80 border-b border-blue-300">
         <img src= {item.avatar ? item.avatar.url : Profile} alt="" className='w-8' />
           
          
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
           {item.name}
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
           {item.email}
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
           {item.membership_status ? "Active" : "InActive"}
          </th>
          <th>
        
          <button onClick={()=> {navigate(`/privateworkouts`, {state:{item}})}}  className='border border-[rgba(255,255,255,0.4)] rounded-md px-[1.5rem] py-1  bg-[#384BD6] bg-gradient-to-r from-[#384BD6] to-[#3c9ba0] drop-shadow-md hover:bg-white'>
            Add Workout
          </button>
          </th>
        </tr>
        
        )
      }

     

      <tbody>
        {/* insert workout list items here */}
      </tbody>
    </table>
  </div>
</div>
);
}

export default Workouts;

