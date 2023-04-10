import { useState, useEffect } from "react";
import SurveyComponent from "../SurveyComponent";
import Profile from "../../assets/Profile.png"
import { useSelector, useDispatch } from "react-redux";

import { createTrainer, loadtrainerData, clearErrors } from "../../actions/adminAction";
import { toast } from "react-toastify";
import Trainerdata from "./Trainerdata";

const Members = () => {

const dispatch = useDispatch();

const {loading ,trainer,  error} = useSelector((state)=>state.createnewtrainer)
const {tloading ,ttrainer, terror} = useSelector((state)=>state.fetchTrainers)

useEffect(() => {
 dispatch(loadtrainerData());
}, [])

  
const handleSubmit=(e)=>{
e.preventDefault();

const {name, email, password, availability , specialties, hourlyRate} = formdata

const myForm = new FormData();

    myForm.set("name", name)
    myForm.set("email", email)
    myForm.set("password", password)
    myForm.set("availability", availability)
    myForm.set("specialties", specialties)
    myForm.set("hourlyRate", hourlyRate)
    myForm.set("avatar", avatar)
    dispatch(createTrainer(myForm))

    
    setformdata({
      name : "",
      email : "",
      password : "",
      hourlyRate : "",
      availability : "",
      specialties : []
      
    })
}



const [formdata, setformdata] = useState({
  name : "",
  email : "",
  password : "",
  hourlyRate : "",
  availability : "",
  specialties : []
  
})


  

  const [avatar, setAvatar] = useState(Profile);
  const [avatarPreview, setAvatarPreview] = useState(Profile);


  const registerDataChange = (e) => {
    
    if (e.target.name === "avatar") {
      const reader = new FileReader();
  
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
  
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setformdata({...formdata , [e.target.name] : e.target.value})
  
    }
    
  };
  


  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearErrors());
    }
  
    if (trainer) {
     toast.success("Trainers Created Successfully !")
    }
  }, [dispatch, error,trainer ]);
  
  


  return (
    <div className=" justify-self-center text-white col-span-3 ">
      <h1 className="text-center text-2xl">Trainers</h1>
      <div className="flex flex-col justify-evenly">

   
      <form
        onSubmit={handleSubmit}
        action="#"  method="POST" autoComplete="off" encType="multipart/form-data"
        className="bg-gradient-to-b from-[#252835] to-[#273F94] p-8 rounded-lg shadow-md w-[60%]"
      >
     
        <label className="block mb-2 text-left">
          Name:
          <input
            type="text"
            name="name"
         
            onChange={registerDataChange}
            className="border border-gray-400 px-2 py-1 rounded w-full bg-[rgba(255,255,255,0.1)]"
          />
        </label>
        <label className="block mb-2 text-left">
          Email:
          <input
            type="email"
            name="email"
            onChange={registerDataChange}
            className="border border-gray-400 px-2 py-1 rounded w-full bg-[rgba(255,255,255,0.1)]"
          />
        </label>
        <label className="block mb-2 text-left">
          Password:
          <input
            type="password"
            name="password"
            onChange={registerDataChange}
            className="border border-gray-400 px-2 py-1 rounded w-full bg-[rgba(255,255,255,0.1)]"
          />
        </label>
        <label htmlFor="avatar" className="block mb-2 text-left ">
              Profile Pic
              </label>
              <div className="flex">

              
              <img src={avatarPreview} alt="Avatar Preview"  className="w-[45px] border bg-[rgba(255,255,255,0.1)] border-gray-400 rounded rounded-r-none border-r-transparent"/>
              <input
                type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={registerDataChange}
                // onChange={profiledata}
                className="border border-gray-400 px-2 py-1 rounded w-full bg-[rgba(255,255,255,0.1)] rounded-l-none border-l-transparent"
                placeholder="Profile Pic"
              />
      </div>
      
        <label className="block mb-2 text-left">
          Specialties:
          <SurveyComponent
          // value={formdata.specialties}
          setformdata={setformdata}
          registerDataChange={registerDataChange}
        
        />
        </label>
        <label className="block mb-2 text-left">
          Hourly Rate:
          <input
            type="number"
            name="hourlyRate"
            onChange={registerDataChange}
            className="border border-gray-400 px-2 py-1 rounded w-full bg-[rgba(255,255,255,0.1)]"
          />
        </label>
        <label className="block mb-2 text-left">
          Availability:
          <input
            type="text"
            name="availability"
            onChange={registerDataChange}
            className="border border-gray-400 px-2 py-1 rounded w-full bg-[rgba(255,255,255,0.1)]"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[100%]"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>



{/* trainer details container */}


<div className="container mx-auto px-4 sm:px-6 lg:px-8 col-span-3">
        {/* <Usermodal isOpen={isOpen} user={user}   toggleModal={toggleModal}/> */}
        <h1 className="text-2xl font-semibold  mb-8 text-center text-white">All Trainers</h1>
        {tloading ? (
        <p>Loading...</p>
        ) : (
        <div className="grid grid-cols-1  gap-4">
            {ttrainer ?  ttrainer.map(t => (
           <Trainerdata t={t} key={t.id} />
            )): "loading"}
        </div>
        )}
    </div>



      </div>
    </div>
  );
};

export default Members;
