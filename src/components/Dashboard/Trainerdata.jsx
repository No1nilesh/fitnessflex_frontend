import { useEffect, useState } from "react";
import Profilepic from "../../assets/Profile.png";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTrainer,
  loadtrainerData,
  clearErrors,
} from "../../actions/adminAction";
import { toast } from "react-toastify";
import Loader from "../utility/Loader";

const Trainerdata = ({ t, toggleModal }) => {
  const dispatch = useDispatch();

  const { loading, success, error } = useSelector(
    (state) => state.updatemembership
  );

  const [deletedtrainer, setdeletedtrainer] = useState(null);

  const handledelete = () => {
    dispatch(deleteTrainer(t._id));
    setdeletedtrainer(t._id);
    if (success) {
      toast.success("Trainer deleted successfully");
      dispatch(loadtrainerData());
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [error, dispatch]);

  if (deletedtrainer && deletedtrainer._id === t._id) {
    // if the membership has been deleted, return null to remove the card
    return null;
  }

  // if(loading){
  //   return <Loader/>
  // }
  return (
    <div className="max-w-[95%]  bg-[#0d1117] border-solid border border-[#30363d] rounded-md drop-shadow-lg mx-auto p-10 lg:flex max-h-full justify-center items-center">
      <div className="flex  flex-row items-center mb-2 text-black justify-around">
        <img
          className="w-48 rounded-full mr-4 flex-2"
          src={t.avatar ? t.avatar.url : Profilepic}
          alt={t.name}
        />
        <div className="flex-1">
          {/* <div className='flex'>
         <label htmlFor="">Name : </label> <h2 className="text-lg font-semibold"></h2>
        </div> */}

          <li className="flex items-center gap-3 ">
            <h5 class=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Name:
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">{t.name}</p>
          </li>
          <li className="flex items-center gap-3 ">
            <h5 class=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Email : 
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">{t.email}</p>
          </li>
          <li className="flex items-center gap-3 ">
            <h5 class=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Availiblity :
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">{t.availability}</p>
          </li>
          <li className="flex items-center gap-3 ">
            <h5 class=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Hourly Rate : 
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">{t.hourlyRate}</p>
          </li>
          <li className="flex items-center gap-3 ">
            <h5 class=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Members Assigned :
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">{t.assigned_members.length}</p>
          </li>

          <div>
          <h5 class=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Specialities : 
            </h5>
            {Array.isArray(t?.specialties) && t.specialties.length > 0 ? (
              t.specialties.map((item) => (
                <p key={item} className="font-normal text-gray-700 dark:text-gray-400">
                  {item}
                </p>
              ))
            ) : (
              <p>No specialities</p>
            )}
          </div>

          {/* <span className="text-gray-500">{user.membership_status ? "Active" : "InActive"}</span> */}
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handledelete}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Trainerdata;
