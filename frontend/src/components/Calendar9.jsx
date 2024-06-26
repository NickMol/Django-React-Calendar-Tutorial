
import {React, useEffect, useState} from 'react'
import MyCalendar9 from './calendars/MyCalendar9'
import AxiosInstance from './AxiosInstance'
import '../App.css'
import dayjs from 'dayjs'
import DatePickerForm from './forms/DatePickerForm'
import MultiSelectForm from './forms/MultiSelectForm'
import Box from '@mui/material/Box';
import MyModal9 from './utils/Modal9'

const Calendar9 = () => {

  const [formData, setFormData] = useState({
    title: '', 
    classNames: '', 
    start: '', 
    end: ''
  })

  console.log('data from my form', formData)

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
       ...formData, 
       [name] : value
    })
  }

  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState([false]);
  
  const handleOpen = (info) => {
      setOpen(true)
      setSelectedDate(info.dateStr)
      setFormData({
        title: '', 
        classNames: '', 
        start: dayjs(info.dateStr), 
        end: dayjs(info.dateStr)
      })
    };

  const handleClose = () => {
    setOpen(false)
    setFormData({
      title: '', 
      classNames: '', 
      start: '', 
      end: ''
    })
  
  };

  const [events, setEvents] = useState([])
  const [statusOptions, setStatusOptions] = useState()
  const [selectedStatus, setSelectedStatus] = useState([])

  const [fromDate, setFromDate] = useState(null)

  const fromDateChange = (newDate) =>{
     setFromDate(newDate)
  }

  const [toDate, setToDate] = useState(null)

  const toDateChange = (newDate) =>{
    setToDate(newDate)
  }


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
    })

  }

  useEffect(() =>{
    GetData();
  },[] )

  return (
    <div>
        { loading ? <p>Loading the data...</p> :
          <> 
        
        <MyModal9
          open = {open}
          handleClose={handleClose}
          myDate={selectedDate}
          formData = {formData}
          handleChange={handleChange}
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
          <MyCalendar9
            myEvents={filteredEvents}
            dayClickAction={handleOpen}
          />

        </Box>
        </>

        }
    </div>
  )
}

export default Calendar9