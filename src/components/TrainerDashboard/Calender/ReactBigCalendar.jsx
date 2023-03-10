import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {

  const events = [
    {
      start: new Date(2023, 2, 10, 9, 0),
      end: new Date(2023, 2, 10, 10, 0),
      title: 'Yoga Class',
      trainer: 'John Doe',
      location: 'Studio 1'
    },
    {
      start: new Date(2023, 2, 10, 11, 0),
      end: new Date(2023, 2, 10, 12, 0),
      title: 'Cardio Class',
      trainer: 'Jane Smith',
      location: 'Studio 2'
    },
    // Add more events here...
  ];

  const [eventsData, setEventsData] = useState(events);

  const handleSelect = ({ start, end }) => {
    console.log(start);
    console.log(end);
    const title = window.prompt("New Event name");
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title
        }
      ]);
  };
  return (
    
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        // style={{ height: "60vh" }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
      />
   
  );
}
