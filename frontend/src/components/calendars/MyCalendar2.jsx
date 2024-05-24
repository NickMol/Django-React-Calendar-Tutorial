import {React} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import multiMonthPlugin from '@fullcalendar/multimonth'

const MyCalendar2 = () => {
  // dayGridDay, dayGridWeek, dayGridMonth, dayGridYear
  // timeGridDay, timeGridWeek
  // listDay, listWeek, listMonth, listYear
  // multiMonthYear

  return (
    <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin, listPlugin,multiMonthPlugin ]}
        initialView="dayGridMonth"
        events={[
            {title : 'Event #1', start: '2024-04-17'},
            {title : 'Event #2', start: '2024-04-19', end: '2024-04-21'},
            {title : 'Event #3', start: '2024-04-24T12:00:00', allDay: false},
        ]}

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

export default MyCalendar2