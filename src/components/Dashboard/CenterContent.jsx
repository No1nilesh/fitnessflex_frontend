import React from "react";
import search from "../../assets/search.svg";
function CenterContent() {
  return (
    <>
      <div className="conatiner justify-self-center text-white">
      <div>
        <h2 className="text-center my-3 text-[1.3em] font-bold">
          Welcome Jai Mane !
        </h2>
        <input
          type="text"
          placeholder="eg:search something..."
          className="bg-[#460F54] border border-[rgba(255,255,255,0.1)] outline-none focus:outline-none w-[30rem] p-1 rounded-md shadow-inner text-white relative placeholder:text-[#5b2568] placeholder:text-center"
        />
        <img
          src={search}
          className="absolute top-[82px] right-[464px] w-5"
          alt=""
        />     
</div>
        <div className="members">

<div className="card bg-gradient-to-r from-[#384BD6] to-[#1EB1BA] w-[150px] rounded-lg p-3">
  <h2>Member List</h2>
  <div className="flex gap-2 justify-center">
  <button className=" text-xs bg-[#1EB1BA] rounded-md drop-shadow-lg px-2  border border-[rgba(255,255,255,0.3)]">Show All</button>
  <button className=" text-xs bg-[#384BD6] rounded-md drop-shadow-lg px-2  border border-[rgba(255,255,255,0.3)]">Show All</button>
</div>
</div>
        </div>
      </div>
    </>
  );
}

export default CenterContent;
