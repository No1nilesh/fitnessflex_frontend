import React from 'react'
import Profilepic from "../../assets/Profile.png" 


const Membersallcard = ({ user , toggleModal}) => {



  return (
    <div className="bg-white shadow-md rounded-md p-2">
      <div className="flex flex-col items-center mb-2">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src={user.avatar ? user.avatar.url : Profilepic}
          alt={user.name}
        />
        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
          
            <span className="text-gray-500">{user.membership_status ? "Active" : "InActive"}</span>
          
        </div>
      </div>
      <div className="flex justify-end">
        <button onClick={()=>toggleModal(user)}  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          View Profile
        </button>
      </div>
    </div>
  )
}

export default Membersallcard
