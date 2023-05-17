import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletepvworkout } from "../../actions/trainerAction";
import { toast } from "react-toastify";

const Privateworkoutcard = ({ pv, memberId }) => {
  const dispatch = useDispatch();
  const [deletedworkout, setDeletedworkout] = useState(null);

  const handledelete = () => {
    dispatch(deletepvworkout(memberId, pv._id));
    toast.success("Workout deleted Successfuully");
    setDeletedworkout(pv);
  };

  if (deletedworkout && deletedworkout._id === pv._id) {
    // if the membership has been deleted, return null to remove the card
    return null;
  }

  return (
    <div className="container  rounded-sm flex flex-col  justify-center items-center gap-2 lg:p-5">

   <hr className="border mb-2 border-purple-500/20 w-full "/>
    <div className="flex flex-wrap">
        <label className="font-bold text-base" htmlFor="">
          Workout : {" "}
        </label>
        <p className="text-white  text-base">{pv.workout_name}</p>
      </div>
      <div className="flex flex-wrap">
        <label className="font-bold text-lg" htmlFor="">
          Exercise : {" "}
        </label>
        <p className="text-white  text-base">{pv.exercise}</p>
      </div>
      <div className="flex flex-wrap">
        <label className="font-bold text-base" htmlFor="">
          Description :{" "}
        </label>
        <p className="text-white  text-base">{pv.description}</p>
      </div>

      <div className="flex w-full justify-center ">
        <button
          className="bg-red-500 text-white mx-3 px-2 py-1 rounded-md"
          onClick={handledelete}
        >
          Delete
        </button>

        <button
          className="bg-green-500 text-white mx-3 px-2 py-1 rounded-md"
          // onClick={}
        >
          Update
        </button>
      </div>
    
    </div>
      

      
 
  );
};

export default Privateworkoutcard;
