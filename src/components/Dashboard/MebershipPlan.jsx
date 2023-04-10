import { useState, useEffect } from "react";
import "./MembershipPlan.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  createMembership,
  getMembership,
  updateMembership,
} from "../../actions/adminAction";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MembershipCard from "./MembershipCard";

const MebershipPlan = () => {
  //const
  const { loading, error, createdMembership } = useSelector(
    (state) => state.createmem
  );

  const { currentMembership } = useSelector(
    (state) => state.getmembership
  );

  const {success} = useSelector(
  (state)=>
    state.updatemembership
  )

  const [formData, setFormData] = useState({
    membership_type: "",
    name: "",
    membership_period: "",
    amount: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { membership_type, name, membership_period, amount } = formData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembership());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("membership_type", membership_type);
    myForm.set("name", name);
    myForm.set("membership_period", membership_period);
    myForm.set("amount", amount);
    dispatch(createMembership(myForm));
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Submitted");
      setIsSubmitting(false);
      dispatch(getMembership());
      setFormData({
        membership_type: "",
        name: "",
        membership_period: "",
        amount: "",
      });
    }, 2000);
  };

  useEffect(() => {
    let successToastId = null;
    let errorToastId = null;
    let updateToastId = null;

    if (error) {
      errorToastId = toast.error(error);
      dispatch(clearErrors());
    }
    if(success){
     updateToastId = toast.success("Membership Updated successfully")
    }
    
    if (createdMembership) {
      successToastId = toast.success("Membership Created Successfully");
     
    }
    
    toast.dismiss(); // Clear any previous toasts
    return () => {
      // Remove any existing toasts when the component unmounts
      toast.dismiss(successToastId);
      toast.dismiss(errorToastId);
      toast.dismiss(updateToastId);
    };
  }, [createdMembership, error,success, dispatch]);



  const handleupdateSubmit=(e)=>{
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("membership_type", emembership_type);
    myForm.set("name", ename);
    myForm.set("membership_period", emembership_period);
    myForm.set("amount", eamount);
    dispatch(updateMembership(eid , myForm));
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Submitted");
      setIsSubmitting(false);
      setsUpdatememebrship({});
      setshowModal(false);
      dispatch(getMembership());
    }, 2000);


  }



  const [showModal, setshowModal] = useState(false)
  const [Updatememebrship, setsUpdatememebrship] = useState({
    emembership_type: "",
    ename: "",
    emembership_period: "",
    eamount: "",
  })

  const handleUpdateChange = (e) => {
    setsUpdatememebrship({ ...Updatememebrship, [e.target.name]: e.target.value });
  };
  
  const {emembership_type, ename, emembership_period, eamount, eid} = Updatememebrship;

  const openModal=(cmembership)=>{
    console.log("njd")
    setshowModal(true)
    setsUpdatememebrship({
      emembership_type: cmembership.membership_type,
      ename: cmembership.name,
      emembership_period: cmembership.membership_period,
      eamount: cmembership.amount,
      eid : cmembership._id
    })
  }


  return (



    <div className="container justify-self-center text-white col-span-3">

    

{/* Update Membership */}
{showModal ? (<div className="absolute"> 
<span onClick={()=>{
  setshowModal(false)
}} className="absolute left-1 cursor-pointer">X</span>
 <form
      onSubmit={handleupdateSubmit}
      className="bg-gradient-to-r from-blue-700 to-teal-500 flex flex-col flex-[50%] gap-4 p-6 rounded-md "
    >
      <h1 className="text-2xl font-bold text-white text-center">
        Create Membership Plans
      </h1>
      <label className="text-white">
        Membership Type:
        <input
          className="block w-full px-4 py-2 rounded-md bg-white text-gray-800"
          type="text"
          name="emembership_type"
          value={emembership_type}
          required
          onChange={handleUpdateChange}
        />
      </label>
      <label className="text-white">
        Name:
        <input
          className="block w-full px-4 py-2 rounded-md bg-white text-gray-800"
          type="text"
          name="ename"
          required
          value={ename}
          onChange={handleUpdateChange}
        />
      </label>
      <label className="text-white">
        Membership Period:
        <input
          className="block w-full px-4 py-2 rounded-md bg-white text-gray-800"
          type="text"
          name="emembership_period"
          required
          value={emembership_period}
          onChange={handleUpdateChange}
        />
      </label>
      <label className="text-white">
        Amount:
        <input
          className="block w-full px-4 py-2 rounded-md bg-white text-gray-800"
          type="text"
          name="eamount"
          required
          value={eamount}
          onChange={handleUpdateChange}
        />
      </label>
      <button
        type="submit"
        className="bg-red-700 text-white py-2 px-4 rounded-md hover:bg-gray-200"
      >
        {loading ? "Submitting..." : "Create Membership"}
      </button>
    </form></div>) : null}









    {/* Create Membership form */}
    
  <div className="flex gap-4">
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-r from-blue-700 to-teal-500 flex flex-col flex-[50%] gap-4 p-6 rounded-md"
    >
      <h1 className="text-2xl font-bold text-white text-center">
        Create Membership Plans
      </h1>
      <label className="text-white">
        Membership Type:
        <input
          className="block w-full px-4 py-2 rounded-md bg-white text-gray-800"
          type="text"
          name="membership_type"
          value={membership_type}
          required
          onChange={handleChange}
        />
      </label>
      <label className="text-white">
        Name:
        <input
          className="block w-full px-4 py-2 rounded-md bg-white text-gray-800"
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className="text-white">
        Membership Period:
        <input
          className="block w-full px-4 py-2 rounded-md bg-white text-gray-800"
          type="text"
          name="membership_period"
          required
          value={membership_period}
          onChange={handleChange}
        />
      </label>
      <label className="text-white">
        Amount:
        <input
          className="block w-full px-4 py-2 rounded-md bg-white text-gray-800"
          type="text"
          name="amount"
          required
          value={amount}
          onChange={handleChange}
        />
      </label>
      <button
        type="submit"
        className="bg-red-700 text-white py-2 px-4 rounded-md hover:bg-gray-200"
      >
        {loading ? "Submitting..." : "Create Membership"}
      </button>
    </form>
    

    <div className=" flex-[50%] overflow-hidden max-h-[60vh] rounded-md">
      <div className="membership overflow-y-auto h-full">
        <h1 className="text-center">Membership</h1>
        <div className="flex flex-col gap-2">
          {currentMembership
            ? currentMembership.map((membership) => {
                return (
                  <MembershipCard
                    key={membership.id}
                    className="py-4"
                    membership={membership}
                    openModal={openModal}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  </div>



  



</div>

  );
};

export default MebershipPlan;
