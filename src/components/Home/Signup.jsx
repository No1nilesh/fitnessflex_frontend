import {Link} from "react-router-dom";
// import React, { useState } from 'react'

// import { LockClosedIcon } from '@heroicons/react/20/solid'
// import logo from '../assets/logo.png'
import signupimage from '../../assets/signup.svg'



function Signup(props) {



  return (
    

    <div className="bg-white">
  
    <div className=" h-[100svh] mx-auto ">
<div className="md:flex min-h-full items-center justify-center  px-4 sm:px-6 lg:px-8  -z-10">
    
    <div className="signupImage md:max-w-[45%] hidden md:block ">
      <img className="" src={signupimage} alt="" />
    </div>
     
      <div className="w-full max-w-md space-y-4  border rounded-md p-4 shadow-md">
        <div>
          {/* <img
            className="mx-auto h-12 w-auto -z-20"
            src={logo}
            alt="Your Company"
          /> */}
        
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Signup 
          </h2>
       
        </div>
        <form className="mt-8 space-y-6" action="#"  method="POST" autoComplete="off" encType="multipart/form-data">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
            <div>
              <label htmlFor="Name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                // value={Credentials.name}
                onChange={onchange}
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Name"
                autoComplete="off"
              />
            </div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                // value={Credentials.email}
                onChange={onchange}
                required
                className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
                
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                // value={Credentials.password}
                onChange={onchange}
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
               Confirm Password
              </label>
              <input
                id="cpassword"
                name="cpassword"
                type="cpassword"
                required
                className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
              Profile Pic
              </label>
              <input
                id="image"
                name="image"
                type="file"
                // onChange={profiledata}
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-500 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm file:bg-inherit file:border-none"
                placeholder="Profile Pic"
              />
            </div>
            
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                already have an account?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
              </span>
              Create Accountt
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  </div>
 


  )
}

export default Signup
