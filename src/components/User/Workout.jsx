import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getpvworkout } from "../../actions/memberAction";
import Loader from "../utility/Loader";

const Workout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getpvworkout());
  }, []);

  const { pvworkout, loading, error } = useSelector((state) => state.getpvwork);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <h1 className="p-4 my-3 bg-slate-700">Premium Workouts</h1>

      <div className="container mx-auto px-4">
        <div className="flex gap-2 flex-col justify-center items-center mb-5">
          {pvworkout
            ? pvworkout.map((pv) => (
                <div className="container w-[70%] bg-[#0d1117] border-solid border border-[#30363d] drop-shadow-lg rounded-md flex gap-2 flex-col p-5">
                  <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Workout :{" "}
                    </h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {pv.workout_name}
                    </p>
                  </div>
                  <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Exercise :{" "}
                    </h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {pv.exercise}
                    </p>
                  </div>
                  <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Description :{" "}
                    </h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {pv.description}
                    </p>
                  </div>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400 self-end">
                    {new Date(pv.createdAt).toLocaleDateString("en-US")}
                  </p>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Workout;
