import { useEffect } from "react";
import profilePic from "../../assets/Profile.png";
import load from "../../assets/Spinner-1s-200px.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadmember } from "../../actions/paymentAction";
import { getTrainer } from "../../actions/trainerAction";
import Loader from "./Loader";

function Profile({ user }) {
  const date = new Date(user.created_at);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadmember());
    dispatch(getTrainer());
  }, []);

  const { member, loading } = useSelector((state) => state.fetchmember);
  const { tloading, trainer } = useSelector((state) => state.loadTrainer);

  if (loading) {
    return <Loader />;
  }
  if (tloading) {
    return <Loader />;
  }

  // console.log(member.start_of_membership_date);
  var options = { year: "numeric", month: "long", day: "numeric" };
  const joinDate = member ? new Date(member.start_of_membership_date) : null;
  const endDate = member ? new Date(member.end_of_membership_date) : null;

  const handlerenew = () => [navigate("/renew")];

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className=" min-h-screen text-white flex flex-col justify-evenly items-center">
          <h1 className="text-4xl font-semibold  my-2 text-center text-white">
            Profile
          </h1>
          <div className="max-w-[95%]  bg-[#0d1117] border-solid border border-[#30363d] rounded-md drop-shadow-lg mx-auto p-10 lg:flex max-h-full justify-center items-center">
            <div className="flex flex-col flex-[50%] justify-center items-center  gap-3 border-r p-3 bg-[#0d1117] border-solid  border-[#30363d]">
              <div className="h-48 w-48 grid place-content-center rounded-full border-[3px] border-purple-600 shadow-md">
                <img
                  src={user.avatar ? user.avatar.url : profilePic}
                  alt="Profile"
                  className="w-48  mb-4 sm:mb-0 sm:mr-6"
                />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-4xl text-center font-bold">{user.name}</h1>
                <p className="text-gray-500 text-lg text-center">{`Member since ${date.getFullYear()}`}</p>
                <p className="text-gray-100 mt-4">
                  I love working out and staying fit. I enjoy trying out new
                  exercises and pushing my limits.
                </p>
              </div>

              <Link to={"/api/auth/me/update"}>
                <button className=" bg-red-500 py-2 w-[20rem] rounded-md drop-shadow-md">
                  Edit Profile
                </button>
              </Link>
              <Link
                className=" bg-red-500 py-2 w-[20rem] rounded-md drop-shadow-md text-center"
                to={"/api/auth/password/update"}
              >
                Change Password
              </Link>
            </div>

            <div className="mt-8 flex flex-[50%] flex-col gap-2 justify-center items-center self-baseline">
              {member && user.role === "user" ? (
                <>

                  <h1 className="text-3xl font-semibold mb-8  text-center text-white">
                    Membership Info
                  </h1>
              
                <div className="  w-full px-6 rounded-lg shadow-md flex justify-center">
                  <ul className="flex flex-col gap-6">
                    <li className="flex items-center gap-3">
                      <h5 class=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Email:
                      </h5>
                      <p class="font-normal text-gray-700 dark:text-gray-400">
                        {user.email}
                      </p>
                    </li>
                    <li className="flex items-center gap-3 ">
                      <h5 class=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Membership Type:
                      </h5>
                      <p class="font-normal text-gray-700 dark:text-gray-400">
                      {member.memebership_type}
                      </p>
                    </li>
                    <li className="flex items-center gap-3 ">
                      <h5 class=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Membership Status:
                      </h5>
                      <p class="font-normal text-gray-700 dark:text-gray-400">
                      {
                      user.membership ? "Active" : "InActive"
                    }
                      </p>
                    </li>
                    <li className="flex items-center gap-3">
                      <h5 class=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Membership Start Date:
                      </h5>
                      <p class="font-normal text-gray-700 dark:text-gray-400">
                      {joinDate.toLocaleDateString("en-US", options)}
                      </p>
                    </li>
                    <li className="flex items-center gap-3 ">
                      <h5 class=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Membership Renewal Date:
                      </h5>
                      <p class="font-normal text-gray-700 dark:text-gray-400">
                      {endDate.toLocaleDateString("en-US", options)}
                      </p>
                    </li>

                    <li className="flex justify-center items-center">
                      <button
                        onClick={handlerenew}
                        className=" bg-red-500 py-2 w-[20rem] rounded-md drop-shadow-md"
                      >
                        Renew Membership
                      </button>
                    </li>
                  </ul>
                </div>
                </>
              ) : null}

              {/* admin only */}
              {user.role === "admin" ? (
                <div className=" bg-gradient-to-r from-[#384BD6] to-[#1EB1BA] p-6 w-[80%] rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-4 text-center">
                    Admin Details
                  </h2>
                  <ul className="">
                    <li>
                      <span className=" font-bold">Name: </span>
                      {`${user.name}`}
                    </li>
                    <li>
                      <span className=" font-bold">Email: </span>
                      {`${user.email}`}
                    </li>
                  </ul>
                </div>
              ) : null}

              {trainer && user.role === "trainer" ? (
                <div className=" bg-gradient-to-r from-[#384BD6] to-[#1EB1BA] p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-4">Trainer Info</h2>
                  <ul className="">
                    <li>
                      <span className=" font-bold">Email:</span>
                      {`${trainer.email}`}
                    </li>
                    <li>Hourly Rate: {trainer.hourlyRate}</li>
                    <li>Availiblity : {trainer.availability}</li>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
