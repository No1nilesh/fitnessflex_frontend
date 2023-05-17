import {useEffect} from "react";
import Membership from "./Membership";
import { useSelector, useDispatch } from "react-redux";
import {fetchMembership} from "../../actions/userAction"
import Loader from "../utility/Loader";
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { GiMuscleUp } from 'react-icons/gi';

const UserHome = () => {

const dispatch = useDispatch();
const { loading, error, membership } = useSelector(
    (state) => state.usermembership
  );

const {user} = useSelector((state)=>
  state.user
)

  useEffect(() => {
 dispatch(fetchMembership())
  }, [])
  
  if(loading){
    return<Loader/>
  }

  return (
    <>
      <div className=" container mx-auto px-4 py-8">

      <div className="bg-gradient-to-r from-amber-400 via-purple-900 to-stone-500 rounded-md">
     
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to Gym Management!</h1>
        <p className="text-xl text-white mb-8">
          Our gym offers a wide range of classes and services to help you achieve your fitness goals. Whether you're a beginner or an experienced athlete, we have something for you!
        </p>
        <button  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          View Classes
        </button>
      </div>
    </div>




       {!user.membership && <h1 className="text-4xl font-bold mb-4 text-center my-4">Choose a Membership Plan</h1> }
        <div className="flex flex-wrap -mx-4 justify-center" >
        { !user.membership && membership
            ? membership.map((mem) => {
                return (
                  <Membership
                    key={mem.id}
                    className="py-4"
                    mem={mem}
                  />
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default UserHome;
