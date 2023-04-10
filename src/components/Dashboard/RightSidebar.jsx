import React from 'react'
import avatar from '../../assets/Avatar.png'
import Profilepic from "../../assets/Profile.png" 
import { Link } from 'react-router-dom';
import "./sidebar.css";

function RightSidebar({user , members , loading}) {
  return (
    <>
     <div id='right-sidebar' className="bg-gradient-to-b from-[#252835] to-[#273F94] w-[220px] h-[100vh] xl:h-[95svh] rounded-lg border border-[rgba(255,255,255,0.1)] flex flex-col items-center gap-3 drop-shadow-md justify-self-end mr-3 ">
     <Link to={"/profile"}><span className="avatar mt-10 h-[140px] grid place-content-center border-[3px] border-gray-500 rounded-full drop-shadow-lg">
            <img src={user.avatar.url ? user.avatar.url : Profilepic} className="w-[140px] aspect-auto" alt="" />
        </span>
</Link>
        <span className="username text-[rgba(255,255,255,0.4)]"><div className='text-center'>{user.name}</div> </span>

        <div className='flex gap-4 text-white'>
            <span>New Members</span>
            <button className='bg-inherit text-xs text-gray-500'>See All..</button>
        </div>

<ul className='flex flex-col gap-1'>

{members ? members.new_members.map(new_mem => <li className='flex  justify-start items-center gap-2 rounded-lg py-1 px-5 bg-[rgba(64,22,98,0.37)] drop-shadow-lg'>
    <img src={new_mem.avatar ? new_mem.avatar.url : Profilepic} className="w-[35px]" alt="" />
    <div className='flex flex-col gap-0 '>
        <div className='name m-0 text-white self-start'>{new_mem.name}</div> 
        <span className='time text-xs text-gray-500 m-0'>5min</span>
    </div>
    </li>) 

     : 
    null
}
</ul>

<span className='absolute bottom-5 text-[0.6em] text-[rgba(255,255,255,0.3)]'>© 2023 Fitness Flex Pvt. Ltd. All Rights Reserved</span>
     </div>

    </>
  )
}

export default RightSidebar