import {React} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import multiMonthPlugin from '@fullcalendar/multimonth'
import { useNavigate } from 'react-router-dom'
import interactionPlugin from '@fullcalendar/interaction';

const MyCalendar9 = ({myEvents, dayClickAction}) => {
  const navigate = useNavigate()

  const eventClickAction = (data) => {
    navigate(`/eventdetails/${data.event.id}`)
  }

  return (
    <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin, listPlugin,multiMonthPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        events={myEvents}
        eventClick={eventClickAction}
        dateClick = {dayClickAction}

        views = {{
           multiMonth3:{
              type: 'multiMonth', 
              duration: {months: 3},
              titleFormat: {month: 'short', year: 'numeric'}, 
              columnHeaderFormat: {weekday:'short'},
              buttonText: "3 Months"
           }
        }}

        headerToolbar = {{
          left: 'prev,next' ,
          center: 'title',
          right: 'dayGridMonth, timeGridWeek, listDay, multiMonth3'
        }}
    />
  )
}

export default MyCalendar9