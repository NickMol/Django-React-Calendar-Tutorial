
import {React, useEffect, useState} from 'react'
import MyCalendar4 from './calendars/MyCalendar4'
import AxiosInstance from './AxiosInstance'
import '../App.css'

const Calendar4 = () => {

  const [events, setEvents] = useState()

  const GetData = () => {
    AxiosInstance.get(`appointments/`).then((res) =>{
      setEvents(res.data)
      console.log(res.data)
    })

  }

  useEffect(() =>{
    GetData();
  },[] )

  return (
    <div>
       <MyCalendar4
        myEvents={events}
       />
    </div>
  )
}

export default Calendar4