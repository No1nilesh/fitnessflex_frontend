import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  updatePassword,
  loadUser,
} from "../../actions/userAction";
import { UPDATE_PASSWORD_RESET } from "../../constants/userConstant";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// toast.configure()
const UpdatePassword = () => {
    
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [oldPasword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdatePass = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("oldPasword", oldPasword);
    myForm.set("newPassword", newPassword);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(updatePassword(myForm));
  };

  useEffect(() => {
    if (isUpdated) {
      toast.success("Password Changed Successfully!");
      dispatch(loadUser());
      navigate("/profile");
      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [isUpdated, navigate, error, dispatch]);

  return (
    <div className="h-screen grid place-content-center">
      <form onSubmit={handleUpdatePass} className="max-w-md mx-auto bg-slate-300 p-4 rounded-md shadow-xl">
        <div className="mb-4">
          <label htmlFor="old-password" className="block font-medium mb-2">
            Old Password
          </label>
          <input
            type="password"
            id="old-password"
            name="oldPasword"
            value={oldPasword}
            onChange={(event) => setOldPassword(event.target.value)}
            className="border-gray-300 border rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="new-password" className="block font-medium mb-2">
            New Password
          </label>
          <input
            type="password"
            id="new-password"
            name="newPassword"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            className="border-gray-300 border rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirm-password" className="block font-medium mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="border-gray-300 border rounded-lg p-2 w-full"
          />
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Change Password
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;
