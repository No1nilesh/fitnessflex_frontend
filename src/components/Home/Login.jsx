import React from 'react'
import { Link} from 'react-router-dom'
// import { LockClosedIcon } from '@heroicons/react/20/solid'
import loginimage from '../../assets/login.jpg'
// import logo from '../assets/logo.png'

const Login = (props) => {




  return (
    <>
    <div className='bg-white'>
    <div className="md:w-[82%] h-[100vh] shadow-2xl mx-auto">
    <div className="md:flex min-h-full items-center justify-center py-10 px-4 sm:px-6 lg:px-8 shadow-2xl">

    <div className="signupImage md:max-w-[45%] hidden md:block ">
      <img className="" src={loginimage} alt="" />
    </div>

    <div className="w-full max-w-md space-y-8">
      <div>
        {/* <img
          className="mx-auto h-12 w-auto"
          // src={logo}
          alt="Your Company"
        /> */}
        <h1 className='text-center text-[5vmin] text-bold'>Fitness Flex</h1>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
       
      </div>
      <form className="mt-8 space-y-6" action="#" method="POST" >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              // value={credentials.email}
              autoComplete="email"
              required
              onChange={onchange}
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
              autoComplete="current-password"
              required
              // value={credentials.password}
              onChange={onchange}
              className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          
          <div className="text-sm">
            <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
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
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
  </div>
  </div>
</>
  )
}

export default Login
