import React from 'react'

function toolbar({ label, onView }) {
    return (
      <div className="flex justify-between items-center mb-4">
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md px-4 py-2 focus:outline-none"
            onClick={() => onView('today')}
          >
            Today
          </button>
          <button
            className="bg-transparent hover:bg-gray-100 rounded-md px-2 py-1 focus:outline-none"
            onClick={() => onView('prev')}
          >
            &lt;
          </button>
          <button
            className="bg-transparent hover:bg-gray-100 rounded-md px-2 py-1 focus:outline-none"
            onClick={() => onView('next')}
          >
            &gt;
          </button>
        </div>
        <div className="text-lg font-semibold">{label}</div>
        <div>
          <button
            className="bg-transparent hover:bg-gray-100 rounded-md px-2 py-1 focus:outline-none"
            onClick={() => onView('month')}
          >
            Month
          </button>
          <button
            className="bg-transparent hover:bg-gray-100 rounded-md px-2 py-1 focus:outline-none"
            onClick={() => onView('week')}
          >
            Week
          </button>
          <button
            className="bg-transparent hover:bg-gray-100 rounded-md px-2 py-1 focus:outline-none"
            onClick={() => onView('day')}
          >
            Day
          </button>
        </div>
      </div>
    );
  }

export default toolbar