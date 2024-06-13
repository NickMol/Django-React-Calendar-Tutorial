
import {React, useEffect, useState} from 'react'
import MyCalendar8 from './calendars/MyCalendar8'
import AxiosInstance from './AxiosInstance'
import '../App.css'
import dayjs from 'dayjs'
import DatePickerForm from './forms/DatePickerForm'
import MultiSelectForm from './forms/MultiSelectForm'
import Box from '@mui/material/Box';
import MyModal from './utils/Modal'

const Calendar8 = () => {

  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState([false]);
  
  const handleOpen = (info) => {
      setOpen(true)
      setSelectedDate(info.dateStr)
    };

  const handleClose = () => setOpen(false);

  const [events, setEvents] = useState([])
  const [statusOptions, setStatusOptions] = useState()
  const [selectedStatus, setSelectedStatus] = useState([])

  const [fromDate, setFromDate] = useState(null)

  const fromDateChange = (newDate) =>{
     setFromDate(newDate)
     console.log("Selected from date", newDate.format('DD-MM-YYYY'))
  }

  const [toDate, setToDate] = useState(null)

  const toDateChange = (newDate) =>{
    setToDate(newDate)
     console.log("Selected to date", newDate.format('DD-MM-YYYY'))
  }

  console.log(selectedStatus)


  const filteredEvents = events.filter((event) => 
    selectedStatus.includes(event.classNames) &&
    (!fromDate || dayjs(event.start).isAfter(fromDate,'day')) &&
    (!toDate || dayjs(event.end).isBefore(toDate,'day'))
  );

  const [loading, setLoading] = useState(true)

  const GetData = () => {
    AxiosInstance.get(`appointments/`).then((res) =>{
      setEvents(res.data)
      setStatusOptions([...new Set(res.data.map((event) => event.classNames))])
      setSelectedStatus([...new Set(res.data.map((event) => event.classNames))])
      setLoading(false)
      console.log(res.data)
    })

  }

  useEffect(() =>{
    GetData();
  },[] )

  return (
    <div>
        { loading ? <p>Loading the data...</p> :
          <> 
        
        <MyModal
          open = {open}
          handleClose={handleClose}
          myDate={selectedDate}
        />

        <Box sx={{boxShadow:3,padding:"20px", display:'flex', justifyContent:'space-evenly', marginBottom:'20px'}}> 
            <Box sx={{width:'30%'}}>
                <MultiSelectForm
                  label ={"Status"}
                  options = {statusOptions}
                  setSelectedValue={setSelectedStatus}
                  selectedValue = {selectedStatus}
                  />
            </Box>
            <Box sx={{width:'30%'}}>
              <DatePickerForm  label ={"From date"} value={fromDate} onChange={fromDateChange}/>

            </Box>
            <Box sx={{width:'30%'}}>
                <DatePickerForm  label ={"To date"} value={toDate} onChange={toDateChange}/>

            </Box>
        </Box>

        <Box sx={{boxShadow:3,padding:"20px"}}> 
          <MyCalendar8
            myEvents={filteredEvents}
            dayClickAction={handleOpen}
          />

        </Box>
        </>

        }
    </div>
  )
}

export default Calendar8