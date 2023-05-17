import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMembership } from "../../actions/userAction";
import { useNavigate } from "react-router-dom";
import Loader from "../utility/Loader";

const RenewMembership = () => {
  const dispatch = useDispatch();
  const { loading, error, membership } = useSelector(
    (state) => state.usermembership
  );

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchMembership());
  }, []);

  if(loading){
    return <Loader/>
  }
  

  return (
    <>
      <div className="container mx-auto px-4 py-8 text-white">
        {!user.membership && (
          <h1 className="text-4xl font-bold mb-4 text-center ">Renew Membership Plan</h1>
        )}
        <div className="flex flex-wrap -mx-4">
          {membership
            ? membership.map((member) => {
                return <Membercard key={member.id} className="py-4" member={member} />;
              })
            : null}
        </div>
      </div>
    </>
  );
};



function Membercard({member}) {

    const navigate = useNavigate();

    const checkoutMembership =()=>{
        // console.log(mem._id);
        navigate(`/payment`, {state:{member: member , isRenew : true}});
    }


  return <>
     <div className="w-full md:w-1/3 px-4">
          <div className="bg-purple-400 rounded-lg shadow-lg p-6 mb-4">
            <h2 className="text-xl font-bold mb-2">{member.membership_type}</h2>
            <p className="mb-4">{member.amount}₹</p>
            <ul className="text-gray-700">
              <li>Access to basic features</li>
              <li>Limited support</li>
              <li>No discounts on premium features</li>
            </ul>
            <button onClick={checkoutMembership} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4">
              Select Plan
            </button>
          </div>
        </div> 
  </>;
}


export default RenewMembership;