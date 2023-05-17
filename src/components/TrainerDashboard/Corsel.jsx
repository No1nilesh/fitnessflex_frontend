import React, { useState, useEffect } from 'react';
import './Corsel.css';
import Loader from '../utility/Loader';

const Carousel = ({ member }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (member) {
      setIsLoading(false);
    }
  }, [member]);

  const handlePrevClick = () => {
    setCurrentSlide(currentSlide === 0 ? member.length - 1 : currentSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide(currentSlide === member.length - 1 ? 0 : currentSlide + 1);
  };

  if (isLoading) {
    return <Loader/>
  }

  const currentMember = member[currentSlide];

  return (
    <>
    <div className="carousel-container justify-self-center">
      <div
        className={`carousel-slide${currentSlide === 0 ? ' active' : ''}`}
        style={{ transform: `translateX(-${currentSlide * 0}%)` }}
      >
      <div href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <span className='rounded-full h-20 self-center border-[2px] border-[#30363d] '>
        <img className='w-20 mx-auto rounded-full  ' src={currentMember.avatar ? currentMember.avatar.url : null} alt="" />
      </span>
      <div className='flex items-center'>
         <label className='text-lg font-bold' htmlFor="">Name : </label> <p className="text-gray-200">{  currentMember.name }</p>
        </div>
        <div className='flex items-center'>
         <label className='text-lg font-bold' htmlFor="">Email : </label> <p className="text-gray-200">{currentMember.email}</p>
        </div>
        <div className='flex items-center'>
         <label className='text-lg font-bold' htmlFor="">Membership Status : </label> <p className="text-gray-200">{currentMember.membership_status ? "Active" : "InActive" }</p>
        </div>
      </div>
       
      </div>
      <button className="carousel-prev" onClick={handlePrevClick}>{'<'}</button>
      <button className="carousel-next" onClick={handleNextClick}>{'>'}</button>
   
    </div> 
    <div className="carousel-indicators">
        { member.length >= 0 ?  member.map((slide, index) => (
          <button
            key={index}
            className={`carousel-indicator${index === currentSlide ? ' active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        )) : "No member yet"}
      </div>
    </>
  );
};

export default Carousel;
