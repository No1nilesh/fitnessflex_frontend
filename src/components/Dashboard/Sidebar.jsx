import React from 'react'
import analyticsImg  from '../../assets/analytics.png'
// import gymbag from '../../assets/gymbag.png'
import notification from '../../assets/notification.svg'
import members from '../../assets/people.png'
import money from '../../assets/money.svg'
import workout from '../../assets/workoutplan.png'
import plan from '../../assets/plann.svg'
import dashboard from '../../assets/dashboard.svg'

function Sidebar() {
  return (
    <>
<div className='bg-gradient-to-b from-[#252835] to-[#273F94] w-[180px] h-[640px] rounded-md border-white border-opacity-30 flex flex-col items-center'>

<div className='flex gap-1 border-white   '>
<img src={dashboard} alt="" />
  <span>
  Dashboard
  </span> 
</div>

<ul className="text-white px-2 flex flex-col gap-y-2">
  <li className='flex items-center'><img className='w-[30px]' src={analyticsImg} alt="" /> <span> Analytics</span></li>
  <li className='flex items-center'><img className='w-[30px]' src={members} alt="" /> <span> Members</span></li>
  <li className='flex items-center'><img className='w-[30px]' src={workout} alt="" /> <span> Workout Plans</span> </li>
  <li className='flex items-center'><img className='w-[30px]' src={money} alt="" /> <span> Payments Plans</span></li>
  <li className='flex items-center'><img className='w-[30px]' src={plan} alt="" /> <span> Membership Plans</span> </li>
  <li className='flex items-center'><img className='w-[30px]' src={notification} alt="" /> <span> Notifications</span></li>
</ul>
</div>
    </>
  )
}

export default Sidebar