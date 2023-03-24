import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { logout } from "../../actions/userAction";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import PersonIcon from "@material-ui/icons/Person"
import { useNavigate } from "react-router-dom";

function User({user}) {
  const [tabIndex, setTabIndex] = useState(0);

  const [Open, setOpen] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const logoutUser=()=>{
    dispatch(logout())
    toast.success("Log Out Successfully")
    }
  const userProfile=()=>{
   navigate("/profile")
  }  

  const options = [       
    {icon: <PersonIcon/>, name:"Profile", func:userProfile},
    {icon: <ExitToAppIcon/>, name:"Logout", func:logoutUser},

  ]
  

    

  return (
    <div className="container flex justify-center text-white mx-auto py-8">
      <SpeedDial
          ariaLabel="SpeedDial basic example" 
          className="absolute top-5 right-8"
          onClose={()=>setOpen(false)}
          onOpen={()=>setOpen(true)}
          open={Open}
          direction={"down"}
          icon={<img className="SpeedDialIcon" src={user.avatar.url ? user.avatar.url : "/Profile.png"} alt="Profile"/>}
         
          >
          {options.map((item)=>
          (<SpeedDialAction icon={item.icon} tooltipTitle={item.name} key={item.name} onClick={item.func}/>))}
         </SpeedDial>
      <Tabs className="w-fit" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Home</Tab>
          <Tab>Workouts</Tab>
          <Tab>Diet</Tab>
          <Tab>Payment</Tab>
          
        </TabList>

        <TabPanel>
       
          {/* insert workout list and add workout form here */}
        {/* <Workouts/> */}
        </TabPanel>

        <TabPanel>
        
          {/* insert meal plan list and add meal plan form here */}
          {/* <MealPlans/> */}
        </TabPanel>

        <TabPanel>
      
          {/* insert progress tracker and graphs here */}
          {/* <ProgressTracker/> */}
        </TabPanel>
        <TabPanel>
      <h1>Attendence</h1>
          {/* insert progress tracker and graphs here */}
          {/* <ProgressTracker/> */}
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default User;
