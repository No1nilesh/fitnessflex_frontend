import {useState ,useEffect} from "react";
import Profile from "../../../assets/Profile.png"
import { useSelector , useDispatch } from 'react-redux'
import {deleteMembers, clearErrors} from "../../../actions/adminAction"
import { toast } from "react-toastify";
import { loadActiveMember } from "../../../actions/adminAction";

const Usermodal = ({ user, onEdit, isOpen, toggleModal ,}) => {

    const dispatch = useDispatch();

    const {error, success} = useSelector((state)=> state.updatemembership)

  const onClose=()=>{
toggleModal()
  } 


  // const handleEdit = () => {
  //   onEdit(user);
  //   onClose();
  // };

  const [deletedMember, setDeletedMember] = useState(null);

  const handleDelete = () => {
    dispatch(deleteMembers(user._id))
    setDeletedMember(user)
    // toast.success("Member Deleted Successfully")
    onClose();
  };

  useEffect(() => {
    let successid;
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      successid = toast.success("Member deleted successfully");
      dispatch(loadActiveMember());
    }

    toast.dismiss(successid)
  }, [error, success, dispatch]);

  if (deletedMember && user && deletedMember._id === user._id) {
    // if the member has been deleted, return null to remove the card
    console.log(deletedMember._id)
    return null;
  }
  


  if(!isOpen){
    return null
  }

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
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 border border-purple-500 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
               <img className="w-28" src={user.avatar ? user.avatar.url : Profile} alt="" />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  User Details
                </h3>
                <div className="mt-2">
                  <div className="flex items-center">
                    <span className="mr-2 font-bold">Name:</span>
                    <span>{user.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 font-bold">Email:</span>
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 font-bold">Membership Type:</span>
                    <span>{user.membership_status ? user.memebership_type : "Membership Expired"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={handleDelete}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Delete
            </button>
         
            <button
              onClick={onClose}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usermodal;
