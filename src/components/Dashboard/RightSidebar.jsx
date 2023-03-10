import React from 'react'
import avatar from '../../assets/Avatar.png'
import "./sidebar.css";

function RightSidebar() {
  return (
    <>
     <div id='right-sidebar' className="bg-gradient-to-b from-[#252835] to-[#273F94] w-[220px] h-[100vh] xl:h-[95svh] rounded-lg border border-[rgba(255,255,255,0.1)] flex flex-col items-center gap-3 drop-shadow-md justify-self-end mr-3 ">
        <span className="avatar mt-10">
            <img src={avatar} className="w-[140px]" alt="" />
        </span>

        <span className="username text-[rgba(255,255,255,0.4)]"><div className='text-center'>Jai Mane</div> <span className='text-center text-sm'>@jaimane</span></span>

        <div className='flex gap-4 text-white'>
            <span>New Members</span>
            <button className='bg-inherit text-xs text-gray-500'>See All..</button>
        </div>
<ul className='flex flex-col gap-1'>
    <li className='flex  justify-start items-center gap-2 rounded-lg py-1 px-5 bg-[rgba(64,22,98,0.37)] drop-shadow-lg'>
    <img src={avatar} className="w-[35px]" alt="" />
    <div className='flex flex-col gap-0 '>
        <div className='name m-0 text-white self-start'>Great Khali</div> 
        <span className='time text-xs text-gray-500 m-0'>5min</span>
    </div>
    </li>
    <li className='flex  justify-start items-center gap-2   rounded-lg py-1 px-5 bg-[rgba(64,22,98,0.37)] drop-shadow-lg'>
    <img src={avatar} className="w-[35px]" alt="" />
    <div className='flex flex-col gap-0'>
        <div className='name m-0 text-white'>Hero Alom</div> 
        <span className='time text-xs text-gray-500 m-0'>5min</span>
    </div>
    </li>
    <li className='flex  justify-start items-center gap-2  rounded-lg py-1 px-5 bg-[rgba(64,22,98,0.37)] drop-shadow-lg'>
    <img src={avatar} className="w-[35px]" alt="" />
    <div className='flex flex-col gap-0'>
        <div className='name m-0 text-white'>Salmon Bhai</div> 
        <span className='time text-xs text-gray-500 m-0'>5min</span>
    </div>
    </li>
    <li className='flex  justify-start items-center gap-2  rounded-lg py-1 px-5 bg-[rgba(64,22,98,0.37)] drop-shadow-lg'>
    <img src={avatar} className="w-[35px] self-start" alt="" />
    <div className='flex flex-col gap-0'>
        <div className='name m-0 text-white'>Dhincak pooja</div> 
        <span className='time text-xs text-gray-500 m-0'>5min</span>
    </div>
    </li>
    <li className='flex  justify-start items-center gap-2   rounded-lg py-1 px-5 bg-[rgba(64,22,98,0.37)] drop-shadow-lg'>
    <img src={avatar} className="w-[35px]" alt="" />
    <div className='flex flex-col gap-0'>
        <div className='name m-0 text-white'>Hindustani bhau</div> 
        <span className='time text-xs text-gray-500 m-0'>5min</span>
    </div>
    </li>
</ul>

<span className='absolute bottom-5 text-[0.6em] text-[rgba(255,255,255,0.3)]'>© 2023 Fitness Flex Pvt. Ltd. All Rights Reserved</span>
     </div>

    </>
  )
}

export default RightSidebar