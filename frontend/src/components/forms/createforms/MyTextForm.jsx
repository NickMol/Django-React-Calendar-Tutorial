import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function MytextForm({label, value, name, onChange}) {
  return (
    <>
        <TextField 
            id="outlined-basic" 
            label={label}
            variant="outlined" 
            value = {value}
            onChange = {onChange}
            name={name}
            fullWidth
            />
    </>
      
    
    
  );
}
