import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useSelector, useDispatch } from "react-redux";
import { gettrainerschedule , createtrainercalender } from "../../../actions/trainerAction";
import EventModal from "./Modal";
import MyModal from "./Modal";
import Loader from "../../utility/Loader";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {

  const dispatch = useDispatch();

  const {calender, loading} = useSelector((state)=>state.getschedule)
  

  useEffect(() => {
    dispatch(gettrainerschedule());
  }, []);
  
  useEffect(() => {
    setEventsData(calender);
  }, [calender]);
  
 
  
  

  const [eventsData, setEventsData] = useState(calender);

  const [isOpen, setIsOpen] = useState(false);
  const [Schedule, setSchedule] = useState("");

  const toggleModal = (Schedule) => {
    setIsOpen(!isOpen);
    setSchedule(Schedule)
  };

  if(loading || !calender){
    return <Loader/>
  }


  const handleSelect = ({ start, end }) => {
    console.log(start);
    console.log(end);
    const title = window.prompt("New Event name");
  

      const myForm = new FormData();

      myForm.set("start", start);
      myForm.set("end", end);
      myForm.set("title", title);

      if(title){    
        dispatch(createtrainercalender(myForm));
        console.log(eventsData);
      }

      dispatch(gettrainerschedule());
      
  };
  return (
    <>

   
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        // style={{ height: "60vh" }}
        onSelectEvent={(event) =>toggleModal(event)}
        onSelectSlot={handleSelect}
      />


      {
        isOpen && <MyModal  toggleModal={toggleModal} Schedule={Schedule} isOpen={isOpen} />
      }
    </>
    
  );
}
