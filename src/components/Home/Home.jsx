import React from 'react'
// import { useRef } from 'react'
import Spline from '@splinetool/react-spline';

function Home() {

  return (
    <>

<Spline className='' scene="https://prod.spline.design/058vdxRcnabIhul8/scene.splinecode" />
    {/* <div className=" h-[100svh] w-[100svw] "> */}
    {/* <p className='invisible'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}

<div className="text-white dashboard-content absolute top-[24rem] md:top-[10rem]  left-8 z-10 md:w-[40%] flex flex-col justify-center">
<h1 className=' text-[7vmin] font-bold md:text-center'>
 Hey Admin its for you!
</h1>
<p>
Welcome to the ultimate gym management website! With our powerful tools and features, you can take your fitness business to new heights.!
</p>

  {/* <ul className=' list-outside text-sm flex gap-1 flex-col'>
    <li>Get a real-time overview of your business performance with our intuitive dashboard.</li>
    <li>Keep track of key metrics and make data-driven decisions with ease.</li>
    <li>Our dashboard is the ultimate tool for staying on top of your business operations.</li>
  </ul> */}

<button className='self-center border border-[rgba(255,255,255,0.4)] rounded-md px-[1.5rem] py-1 my-4 bg-[#384BD6] bg-gradient-to-r from-[#384BD6] to-[#3c9ba0] drop-shadow-md  hover:bg-[hsl(186,100%,69%)]'>Try Now!</button>
</div>


   


  

    {/* </div> */}
    <section className='lg:h-[100vh] flex justify-center items-center '>
<h1 className='invisible'>
  home
</h1>
    </section>

    
    <section className='h-[100vh] flex justify-center items-end'> 
            <div className="container flex ">
        <div className="trainer text-white">
          <h1 className='text-[7vmin] font-bold text-center'>
            Give Your Trainer a SUPERPOWER!
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam iste, impedit blanditiis nam voluptatum culpa inventore explicabo quasi! Tempora inventore pariatur eum facere vero animi quo quibusdam cumque possimus dicta.
          </p>
        </div>
        <div className="image">
          
        </div>
      </div>
    </section>
    </>
  )
}

export default Home