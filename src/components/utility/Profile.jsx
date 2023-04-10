import { useEffect } from "react";
import profilePic from "../../assets/Profile.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadmember } from "../../actions/paymentAction";

function Profile({ user }) {
  const date = new Date(user.created_at);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(loadmember());
  }, []);
  const { member, loading } = useSelector((state) => state.fetchmember);

  if (loading) {
    return <>loading...</>;
  }

  // console.log(member.start_of_membership_date);
  var options = { year: "numeric", month: "long", day: "numeric" };
  const joinDate = member ? new Date(member.start_of_membership_date) : null;
  const endDate = member ? new Date(member.end_of_membership_date) : null;

const handlerenew=()=>[
  navigate("/renew")
]

  return (
    <div className=" min-h-screen text-white">
      <div className="max-w-[90%] mx-auto py-10 lg:flex max-h-full justify-center items-center">
        <div className="flex flex-col justify-center items-center  gap-3">
          <h1 className="text-3xl mb-2">My Profile</h1>
          <div className="h-48 w-48 grid place-content-center rounded-full border-[3px] border-purple-600 shadow-md">
            <img
              src={user.avatar.url ? user.avatar.url : profilePic}
              alt="Profile"
              className="w-48  mb-4 sm:mb-0 sm:mr-6"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-4xl text-center font-bold">{user.name}</h1>
            <p className="text-gray-500 text-lg text-center">{`Member since ${date.getFullYear()}`}</p>
            <p className="text-gray-700 mt-4">
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

        <div className="mt-8 flex flex-[50%] flex-col gap-2 justify-center items-center">
          {member && user.role === "user" ? (
            <div className=" bg-gradient-to-r from-[#384BD6] to-[#1EB1BA] p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Membership Info</h2>
              <ul className="">
                <li>
                  <span className=" font-bold">Email:</span>
                  {`${user.email}`}
                </li>
                <li>Membership Type: {member.memebership_type}</li>
                <li>{`Membership Status: ${
                  user.membership ? "Active" : "InActive"
                }`}</li>
                <li>
                  Membership Start Date:{" "}
                  {joinDate.toLocaleDateString("en-US", options)}
                </li>
                <li>
                  Membership Renewal Date:{" "}
                  {endDate.toLocaleDateString("en-US", options)}
                </li>
                <li>
                <button onClick={handlerenew} className=" bg-red-500 py-2 w-[20rem] rounded-md drop-shadow-md">
             Renew Membership
            </button>
                </li>
              </ul>
            </div>
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

          {/* <div className=" bg-gradient-to-r from-[#384BD6] to-[#1EB1BA] p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Workout History</h2>
            <ul className="list-none">
              <li className="mb-4">
                <h3 className="text-xl font-bold">Cardio</h3>
                <p className="text-gray-500">01/05/2021</p>
                <p className="mt-2">
                  Ran on the treadmill for 30 minutes at a speed of 7.0 mph. Burned 350 calories.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-bold">Weight Training</h3>
                <p className="text-gray-500">01/10/2021</p>
                <p className="mt-2">
                  Bench pressed 100 lbs for 3 sets of 10 reps. Did 3 sets of bicep curls with 25 lb dumbbells.
                </p>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
