import {React} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const MyCalendar1 = () => {

  return (
    <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
            {title : 'Event #1', start: '2024-04-17'},
            {title : 'Event #2', start: '2024-04-19', end: '2024-04-21'},
            {title : 'Event #3', start: '2024-04-24T12:00:00', allDay: false},
        ]}
    />
  )
}

export default MyCalendar1