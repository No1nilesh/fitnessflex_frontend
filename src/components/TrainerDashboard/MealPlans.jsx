import React from 'react'

function MealPlans() {
    return (
    <div className="container mx-auto py-8">
    <div className="flex items-center justify-between mb-4">
    <h2 className="text-2xl font-medium text-gray-700">Meal Plans</h2>
    <button className='border border-[rgba(255,255,255,0.4)] rounded-md px-[1.5rem] py-1  bg-[#384BD6] bg-gradient-to-r from-[#384BD6] to-[#3c9ba0] drop-shadow-md hover:bg-white'>  Add Meal Plan
    </button>
    </div>
    <div className="bg-white shadow rounded-lg">
    <table className="w-full">
    <thead>
    <tr className="bg-gray-200">
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    Name
    </th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    Client
    </th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    Duration
    </th>
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    Status
    </th>
    </tr>
    </thead>
    <tbody>
    {/* insert meal plan list items here */}
    </tbody>
    </table>
    </div>
    </div>
    );
    }
    
    export default MealPlans;
