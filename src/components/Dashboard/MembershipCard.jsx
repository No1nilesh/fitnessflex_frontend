import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteMembership,
  getMembership,
  clearErrors,
} from "../../actions/adminAction";
import { ToastContainer, toast } from "react-toastify";

const MembershipCard = ({ membership, openModal }) => {
  const dispatch = useDispatch();

  const { loading, success, error } = useSelector(
    (state) => state.createmem
  );

  const [deletedMembership, setDeletedMembership] = useState(null);

  const handleDelete = () => {
    dispatch(deleteMembership(membership._id));
    setDeletedMembership(membership);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Membership deleted successfully");
      dispatch(getMembership());
    }
  }, [error, success, dispatch]);

  if (deletedMembership && deletedMembership._id === membership._id) {
    // if the membership has been deleted, return null to remove the card
    return null;
  }

  return (
    <div className="bg-green-400 shadow-md rounded-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">{membership.membership_type}</h3>
        <div className="bg-blue-500 text-white px-2 py-1 rounded-md">
          {membership.membership_period} Days
        </div>
      </div>
      <div className="mb-2">
        <span className="font-medium text-gray-600">Name:</span>{" "}
        {membership.name}
      </div>
      <div className="mb-2">
        <span className="font-medium text-gray-600">Amount:</span>{" "}
        {membership.amount}
      </div>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded-md"
        onClick={handleDelete}
      >
        {loading ? "Deleting..." : "Delete"}
      </button>
      <button
        className="bg-blue-500 text-white mx-3 px-2 py-1 rounded-md"
        onClick={() => openModal(membership)}
      >
        Update
      </button>
    </div>
  );
};

export default MembershipCard;
