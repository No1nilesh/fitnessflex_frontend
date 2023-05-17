import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  createprivatediet,
  getPrivatediet,
  clearErrors,
} from "../../../actions/trainerAction";

import { toast } from "react-toastify";
import PrivateDietcard from "./PrivateDietcard";
import Loader from "../../utility/Loader";


const Privateworkouts = () => {
  const dispatch = useDispatch();
  
  const location = useLocation();
  
  const  [memberId, setmemberId] = useState(location.state.item.id)
  const { loading, diet, error } = useSelector(
    (state) => state.createpvdiet
  );
  const { tloading, tdiet } = useSelector(
    (state) => state.fetchPrivatediet
  );

  useEffect(() => {
    dispatch(getPrivatediet(location.state.item.id));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { description, diet_name, diet } = formdata;

    const myForm = new FormData();

    myForm.set("description", description);
    myForm.set("diet_name", diet_name);
    myForm.set("diet", diet);

    // myForm.set("avatar", avatar)
    dispatch(createprivatediet(location.state.item.id, myForm));

    setTimeout(() => {
      setformdata({
        description: "",
        diet_name: "",
        diet: "",
        
      });
      dispatch(getPrivatediet(location.state.item.id))
    }, 2000);

  };

  const [formdata, setformdata] = useState({
    description: "",
    diet_name: "",
    diet: "",
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

    if (diet) {
      toast.success("Workout Created Successfully !");
    }
  }, [dispatch, error, diet]);

  if (tloading || !tdiet) {
    return <Loader/>
  }


  

  return (
    <div className="  text-white ">
      
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl text-center dark:text-white mt-2">  {location.state.item.name}'s Diet{" "}</h1>
      <div className="flex  justify-center h-screen flex-col lg:flex-row items-center w-[90%] m-auto">
        <form
          onSubmit={handleSubmit}
          action="#"
          method="POST"
          autoComplete="off"
          className="bg-gradient-to-b from-[#252835] to-[#273F94] p-8 rounded-lg shadow-md m-3"
        >
         <label className="block mb-2 text-left">
            Diet Name:
            <input
              type="text"
              name="diet_name"
              required
              onChange={registerDataChange}
              className="border border-gray-400 border-none p-2 rounded w-full bg-[rgba(255,255,255,0.1)]"
            />
          </label>
          <label className="block mb-2 text-left">
            Diet:
            <input
              type="text"
              name="diet"
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
        <h1 className="text-2xl font-semibold  mt-8 text-center text-white">
            Diet list
          </h1>
          <div className="container mx-auto px-4">
          <div className="flex gap-2 flex-col  justify-center items-center mb-5">
    {tdiet.map((pv) => (
     <PrivateDietcard key={pv._id} memberId={memberId}  pv={pv}/>
    ))}
  </div>
</div>


         
        </div>
      </div>
    </div>
  );
};

export default Privateworkouts;
