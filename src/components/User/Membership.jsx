import React from 'react'
import { useNavigate } from 'react-router-dom';

const Membership = ({mem}) => {

    const navigate = useNavigate();

    const checkoutMembership =()=>{
        console.log(mem._id);
        navigate(`/payment`, {state:{mem}});
    }

  return (
    <>
         <div className="w-full md:w-1/3 px-4">
          <div className="bg-purple-400 rounded-lg shadow-lg p-6 mb-4">
            <h2 className="text-xl font-bold mb-2">{mem.membership_type}₹</h2>
            <p className="mb-4">{mem.amount}</p>
            <ul className="text-gray-700">
              <li>Access to basic features</li>
              <li>Limited support</li>
              <li>No discounts on premium features</li>
            </ul>
            <button onClick={checkoutMembership} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4">
              Select Plan
            </button>
          </div>
        </div> 
    </>
  )
}

export default Membership
