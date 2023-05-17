import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  createprivateworkout,
  getPrivateworkout,
  clearErrors,
} from "../../../actions/trainerAction";

import { toast } from "react-toastify";
import Privateworkoutcard from "../Privateworkoutcard";


const Privateworkouts = () => {
  const dispatch = useDispatch();
  
  const location = useLocation();
  
  const  [memberId, setmemberId] = useState(location.state.item.id)
  const { loading, workout, error } = useSelector(
    (state) => state.createprivateworkout
  );
  const { tloading, pvworkout } = useSelector(
    (state) => state.fetchPrivateworkout
  );

  useEffect(() => {
    dispatch(getPrivateworkout(location.state.item.id));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { description, workout_name, exercise } = formdata;

    const myForm = new FormData();

    myForm.set("description", description);
    myForm.set("workout_name", workout_name);
    myForm.set("exercise", exercise);

    // myForm.set("avatar", avatar)
    dispatch(createprivateworkout(location.state.item.id, myForm));

    setTimeout(() => {
      setformdata({
        description: "",
        workout_name: "",
        exercise: "",
        
      });
      dispatch(getPrivateworkout(location.state.item.id))
    }, 2000);

  };

  const [formdata, setformdata] = useState({
    description: "",
    workout_name: "",
    exercise: "",
  });

  const registerDataChange = (e) => {
    e.preventDefault();

    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (workout) {
      toast.success("Workout Created Successfully !");
    }
  }, [dispatch, error, workout]);

  if (tloading || !pvworkout) {
    return <>loading...</>;
  }


  

  return (
    <div className="  text-white ">
     
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl text-center dark:text-white mt-2"> {location.state.item.name}'s Workout{" "}</h1>
      <div className="flex  justify-center h-screen flex-col lg:flex-row items-center w-[90%] m-auto">
      
        <form
          onSubmit={handleSubmit}
          action="#"
          method="POST"
          autoComplete="off"
          className="bg-gradient-to-b from-[#252835] to-[#273F94] p-8 rounded-lg shadow-md m-3"
        >
          <label className="block mb-2 text-left">
            Workout Name:
            <input
              type="text"
              name="workout_name"
              required
              onChange={registerDataChange}
              className="border border-gray-400 border-none p-2 rounded w-full bg-[rgba(255,255,255,0.1)]"
            />
          </label>
          <label className="block mb-2 text-left">
            Exersise:
            <input
              type="text"
              name="exercise"
              required
              onChange={registerDataChange}
              className="border border-gray-400 border-none p-2 rounded w-full bg-[rgba(255,255,255,0.1)]"
            />
          </label>
          <label className="block mb-2 text-left">
            Description:
            <textarea
              type="text"
              name="description"
              required
              rows={10}
              cols={15}
              onChange={registerDataChange}
              className="border border-gray-400 border-none p-2 rounded w-full bg-[rgba(255,255,255,0.1)]"
            />
          </label>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold p-2 rounded w-[100%]"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>

        {/* trainer details container */}









        <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-scroll h-screen ">
          <h1 className="text-2xl font-semibold  my-8 text-center text-white">
            Workouts list
          </h1>
          <div className="container mx-auto px-4 ">
  <div className="flex gap-2 flex-col  justify-center items-center mb-5">
    {pvworkout.map((pv) => (
     <Privateworkoutcard key={pv._id} memberId={memberId}  pv={pv}/>
    ))}
  </div>
</div>


         
        </div>
      </div>
    </div>
  );
};

export default Privateworkouts;
