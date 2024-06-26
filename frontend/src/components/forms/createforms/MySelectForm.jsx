import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MySelectForm({label, value, name, onChange}) {

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value = {value}
          onChange = {onChange}
          name={name}
          label={label}
        >
          <MenuItem value={'Open'}>Open</MenuItem>
          <MenuItem value={'In Progress'}>In Progress</MenuItem>
          <MenuItem value={'Completed'}>Completed</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}
