import {React} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import multiMonthPlugin from '@fullcalendar/multimonth'
import { useNavigate } from 'react-router-dom'

const MyCalendar7 = ({myEvents}) => {
  const navigate = useNavigate()

  const eventClickAction = (data) => {
    navigate(`/eventdetails/${data.event.id}`)
  }

  return (
    <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin, listPlugin,multiMonthPlugin ]}
        initialView="dayGridMonth"
        events={myEvents}
        eventClick={eventClickAction}

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

export default MyCalendar7