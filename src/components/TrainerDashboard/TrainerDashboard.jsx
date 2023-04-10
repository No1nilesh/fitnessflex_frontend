import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Clients from "./Clients";
import MealPlans from "./MealPlans";
import Overview from "./Overview";
import ProgressTracker from "./ProgressTracker";
import Workouts from "./workouts";
import { useDispatch} from "react-redux";
import Profile from "../../assets/Profile.png"
import { logout } from "../../actions/userAction";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import PersonIcon from "@material-ui/icons/Person"
import { useNavigate } from "react-router-dom";


function TrainerDashboard({user}) {
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
    <div className="container text-white mx-auto p-8">

{/* Profile pic */}
<SpeedDial
          ariaLabel="SpeedDial basic example" 
          className="absolute top-3 right-8"
          onClose={()=>setOpen(false)}
          onOpen={()=>setOpen(true)}
          open={Open}
          direction={"down"}
          icon={<img className="SpeedDialIcon" src={user.avatar.url ? user.avatar.url : Profile} alt="Profile"/>}
         
          >
          {options.map((item)=>
          (<SpeedDialAction icon={item.icon} tooltipTitle={item.name} key={item.name} onClick={item.func}/>))}
         </SpeedDial>


      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Clients</Tab>
          <Tab>Workouts</Tab>
          <Tab>Nutrition</Tab>
          <Tab>Progress</Tab>
          <Tab>Attendance</Tab>
        </TabList>

        <TabPanel>
          <Overview user={user}/>
        </TabPanel>

        <TabPanel>
          <Clients/>
        </TabPanel>

        <TabPanel>
       
          {/* insert workout list and add workout form here */}
        <Workouts/>
        </TabPanel>

        <TabPanel>
        
          {/* insert meal plan list and add meal plan form here */}
          <MealPlans/>
        </TabPanel>

        <TabPanel>
      
          {/* insert progress tracker and graphs here */}
          <ProgressTracker/>
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

export default TrainerDashboard;
