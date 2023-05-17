import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateSchedule,
  gettrainerschedule,
  deletepschedule
} from "../../../actions/trainerAction";

export default function MyModal({ isOpen, Schedule, toggleModal }) {
  const dispatch = useDispatch();

  const { loading, success } = useSelector((state) => state.updateschedule);

  console.log(Schedule._id);
  const [title, SetTitle] = useState(Schedule.title);
  const [deletedSchedule, setDeletedSchedule] = useState("")

  const onClose = () => {
    toggleModal();
  };
  if (!isOpen) {
    return null;
  }



  const handleupdate = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set("title", title);

    if (title) {
      console.log(Schedule._id);
      dispatch(updateSchedule(Schedule._id, myForm));
    }
    dispatch(gettrainerschedule());

    onClose();
  };

  const handledelete=(e)=>{
    e.preventDefault();

    dispatch(deletepschedule(Schedule._id))
    setDeletedSchedule(Schedule);
    dispatch(gettrainerschedule())
    onClose()
  }

  if(deletedSchedule && deletedSchedule._id === Schedule._id){
    console.log(deletedSchedule)
    
    return null
  }


  const start_date = new Date(Schedule.start).toLocaleTimeString("en-US");
  const end_date = new Date(Schedule.end).toLocaleTimeString("en-US");

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        ></span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-bold text-gray-900 text-center"
                  id="modal-headline"
                >
                  Schedule
                </h3>
                <div className="mt-2 text-blue-700">
                  <div className="flex items-center">
                    <span className="mr-2 font-bold">Start:</span>
                    <input
                      type="text"
                      name="start"
                      contentEditable="false"
                      className="outline-1 outline-blue-500"
                      value={start_date}
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 font-bold">End:</span>
                    <input
                      type="text"
                      name="end"
                      contentEditable="false"
                      className="outline-1 outline-blue-500"
                      value={end_date}
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 font-bold">Title:</span>
                    <input
                      type="text"
                      name="title"
                      className="outline-1 outline-blue-500"
                      onChange={(e) => SetTitle(e.target.value)}
                      value={title}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onClose}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>

            <button
              onClick={handleupdate}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-green-700 text-white text-base font-medium  hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Save Changes
            </button>

            <button
              onClick={handledelete}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-700 text-white text-base font-medium  hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
