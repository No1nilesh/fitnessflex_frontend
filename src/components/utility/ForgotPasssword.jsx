import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, forgotPasssword} from "../../actions/userAction";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstant";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";
// toast.configure()

const ForgotPasssword = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error, message, loading } = useSelector((state) => state.forgot);

 const [email, setEmail] = useState("")

 const forgotPasswordSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("email", email);
    dispatch(forgotPasssword(myForm));
  };

  useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch(clearErrors());
      }

      if (message) {
      toast.success(message);
    }

  }, [ message, error, dispatch]);

  if(loading){
    return <Loader/>
  }
  
  return (
    <div className="grid place-content-center h-screen">
    <ToastContainer />
     <div className="bg-white full max-w-md space-y-4  border rounded-md p-4 shadow-md">
       <div>
         <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
           Forgot Password
         </h2>
       </div>
       <form
         className="mt-8 space-y-6"
         action="#"
         method="PUT"
         autoComplete="off"
         onSubmit={forgotPasswordSubmit}
       >
         <input type="hidden" name="remember" defaultValue="true" />
         <div className="-space-y-px rounded-md shadow-sm">
           <div>
            
             <label htmlFor="email-address" className="sr-only">
               Email address
             </label>
             <input
               id="email-address"
               name="email"
               type="email"
               autoComplete="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
               className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
               placeholder="Email address"
             />
           </div>

         </div>

         <div>
           <button
             type="submit"
             className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
           >
             <span className="absolute inset-y-0 left-0 flex items-center pl-3">
               {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
             </span>
             Send Email
           </button>
          
         </div>
       </form>
     </div>
   </div>
  )
}

export default ForgotPasssword
