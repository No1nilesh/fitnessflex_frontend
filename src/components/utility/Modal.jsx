import React from "react";
import { logout } from "../../actions/userAction";
import {  useDispatch } from "react-redux";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Modal({ isOpen, onClose, openButton }) {
const dispatch = useDispatch();

  const logoutUser=()=>{
    dispatch(logout())
    toast.success("Log Out Successfully")
    }
    
  return (
    <div>
      {isOpen && (
     
            <div className="bg-[rgba(255,255,255,0.2)] border border-white p-6 rounded-lg absolute bottom-10 left-0">
             
            <button onClick={logoutUser} className="bg-red-500 hover:bg-gray-400 text-white font-bold py-1 px-2 rounded">
              log out
            </button>
              <button
                onClick={onClose}
                className="bg-transparent hover:bg-gray-400 text-white font-bold py-1 px-2 rounded absolute right-1 top-1"
              >
               x
              </button>
            </div>
     
      )}
    </div>
  );
}

export default Modal;
