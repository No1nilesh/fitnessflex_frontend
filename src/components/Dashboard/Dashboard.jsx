import React from 'react'
import CenterContent from './CenterContent'
import RightSidebar from './RightSidebar'
import Sidebar from './Sidebar'

function Dashboard() {
  return (
    <>
    <div className='grid grid-cols-3 place-content-center h-[100svh]  gap-2 mi-w-[100vw]'>
    <Sidebar/>
    <CenterContent/>
    <RightSidebar/>

    </div>
    </>
  )
}

export default Dashboard