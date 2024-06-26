import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/nl'
import dayjs from 'dayjs';

export default function MyDatePickerForm({label, value, name, onChange}) {
    const handleDateChange = (newDate) => {
        onChange({ target: {name:name, value: dayjs(newDate)}})

    }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='nl'>
      <DemoContainer components={['DatePicker']}>
        <DatePicker 
            sx={{width:'100%'}}
            inputFormat = 'DD/MM/YYYY'
            value = {value}
            onChange = {handleDateChange}
            name={name}
            label={label}
            />
      </DemoContainer>
    </LocalizationProvider>
  );
}
