import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  resetPasssword,
} from "../../actions/userAction";
// import { UPDATE_PASSWORD_RESET } from "../../constants/userConstant";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// toast.configure()
const ResetPassword = () => {
    
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { error, success, loading } = useSelector((state) => state.forgot);

 
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token } = useParams();
  const handleResetPass = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);
    

    dispatch(resetPasssword(token,  myForm));
  };

  useEffect(() => {
    if (success) {
      toast.success("Password Changed Successfully!");
      navigate("/login");

    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [success, navigate, error, dispatch]);



  return (
    <div className="h-screen grid place-content-center">
    <form onSubmit={handleResetPass} className="max-w-md mx-auto bg-slate-300 p-4 rounded-md shadow-xl">
      <div className="mb-4">
        <label htmlFor="old-password" className="block font-medium mb-2">
          New Password
        </label>
        <input
          type="password"
          id="old-password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
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
  )
}

export default ResetPassword
