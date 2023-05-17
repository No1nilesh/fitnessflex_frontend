import React from "react";
import { useNavigate } from "react-router-dom";
import './Card.css'

const Membership = ({ mem }) => {
  const navigate = useNavigate();

  const checkoutMembership = () => {
    console.log(mem._id);
    navigate(`/payment`, { state: { mem } });
  };

  return (
    <>
      <div className="w-full md:w-1/3 px-4">
        <div class="card hover:scale-[1.1] transition duration-700 ease-in-out">
          <div class="card-info flex flex-col p-4">
          <h2 className="text-xl  text-[#f7ba2b] font-bold mb-2">{mem.membership_type}</h2>
          <p className="mb-4 text-[#f7ba2b] text-6xl">{mem.amount}₹</p>
          <ul className="text-gray-100">
            <li>Access to basic features</li>
            <li>Limited support</li>
            <li>No discounts on premium features</li>
          </ul>
         

          <div   onClick={checkoutMembership} class="container-button items-end mt-24 ">
  <div class="hover bt-1"></div>
  <div class="hover bt-2"></div>
  <div class="hover bt-3"></div>
  <div class="hover bt-4"></div>
  <div class="hover bt-5"></div>
  <div class="hover bt-6"></div>
  <button
          
            className="button"
          >
            Join Now
          </button>
</div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Membership;
