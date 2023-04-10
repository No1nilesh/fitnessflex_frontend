import React from 'react'
import Profilepic from "../../assets/Profile.png" 


const Trainerdata = ({ t , toggleModal}) => {



  return (
    <div className="bg-white shadow-md rounded-md p-2 w-[70%] m-auto">
      <div className="flex  flex-row items-center mb-2 text-black justify-around">
        <img
          className="w-48 rounded-full mr-4 flex-2"
          src={t.avatar ? t.avatar.url : Profilepic}
          alt={t.name}
        />
        <div className='flex-1'>

        <div className='flex'>
         <label htmlFor="">Name : </label> <h2 className="text-lg font-semibold">{t.name}</h2>
        </div>
        <div className='flex'>
         <label htmlFor="">Email : </label> <p className="text-gray-500">{t.email}</p>
        </div>

        <div className='flex'>
          <label htmlFor="">Availiblity : </label><p className="text-gray-500">{t.availability}</p>
        </div>

        <div className='flex'>
         <label htmlFor="">Hourly Rate : </label>  <p className="text-gray-500">{t.hourlyRate}</p>
        </div>
        <div className='flex'>
         <label htmlFor="">Members Assigned : </label>   <p className="text-gray-500">{t.assigned_members.length}</p>
        </div>
          
            {/* <span className="text-gray-500">{user.membership_status ? "Active" : "InActive"}</span> */}
          
        </div>
      </div>
      <div className="flex justify-end">
        <button  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          View Profile
        </button>
      </div>
    </div>
  )
}

export default Trainerdata;
