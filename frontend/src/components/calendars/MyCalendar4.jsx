import {React} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import multiMonthPlugin from '@fullcalendar/multimonth'

const MyCalendar4 = ({myEvents}) => {

  return (
    <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin, listPlugin,multiMonthPlugin ]}
        initialView="dayGridMonth"
        events={myEvents}
        // eventBackgroundColor = {'#A020F0'}

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

export default MyCalendar4