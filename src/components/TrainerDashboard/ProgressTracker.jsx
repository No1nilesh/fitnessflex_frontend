import React from 'react'

function ProgressTracker() {
    return (
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-medium text-gray-700">Progress Tracker</h2>
          <button className='border border-[rgba(255,255,255,0.4)] rounded-md px-[1.5rem] py-1  bg-[#384BD6] bg-gradient-to-r from-[#384BD6] to-[#3c9ba0] drop-shadow-md hover:bg-white'>
            Add Entry
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* insert progress tracker cards here */}
        </div>
      </div>
    );
  }
  
  export default ProgressTracker;
  