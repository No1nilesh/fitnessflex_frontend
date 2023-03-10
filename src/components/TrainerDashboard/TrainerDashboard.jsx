import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Clients from "./Clients";
import MealPlans from "./MealPlans";
import Overview from "./Overview";
import ProgressTracker from "./ProgressTracker";
import Workouts from "./workouts";

function TrainerDashboard() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="container text-white mx-auto py-8">
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
          {/* <h2>Overview</h2> */}
          {/* insert graphs here */}
          <Overview/>
        </TabPanel>

        <TabPanel>
          
          {/* insert client list and add client form here */}
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
