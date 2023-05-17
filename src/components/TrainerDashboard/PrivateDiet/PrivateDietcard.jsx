import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deletepvwdiet, getPrivatediet } from '../../../actions/trainerAction';
import { toast } from 'react-toastify';


const PrivateDietcard = ({pv, memberId}) => {
 
    const dispatch = useDispatch();
    const [deletedworkout, setDeletedworkout] = useState(null);


    const handledelete=()=>{
dispatch(deletepvwdiet(memberId, pv._id))
toast.success("Diet deleted Successfuully")
console.log(memberId)
setDeletedworkout(pv);
dispatch(getPrivatediet());
    }

    if (deletedworkout && deletedworkout._id === pv._id) {
        // if the membership has been deleted, return null to remove the card
        return null;
      }
    
  return (
    <div className="container  rounded-sm flex flex-col  justify-center items-start gap-2 lg:p-5">

<hr className="border mb-2 border-purple-500/20 w-full "/>
     <div className="flex flex-wrap items-center">
       <label className="font-bold text-lg" htmlFor="">Diet Name : </label>
      <p className="text-white font-bold text-base">{pv.diet_name}</p>
    </div>
     <div className="flex flex-wrap items-center">
       <label className="font-bold text-lg" htmlFor="">Diet : </label>
      <p className="text-white font-bold text-base">{pv.diet}</p>
    </div>
     <div className="flex flex-wrap items-center">
       <label className="font-bold text-lg" htmlFor="">Description : </label>
      <p className="text-white font-bold text-base">{pv.description}</p>
    </div>


<div className='flex w-full justify-center'>

    <button
    className="bg-red-500 text-white mx-3 px-2 py-1 rounded-md"
    onClick={handledelete}
  >
    Delete
  </button>

    <button
    className="bg-green-500 text-white mx-3 px-2 py-1 rounded-md"
    // onClick={}
  >
    Update
  </button>
</div>


  </div>
  )
}


export default PrivateDietcard
