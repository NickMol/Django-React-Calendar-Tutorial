import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultiSelectForm({label, options, setSelectedValue, selectedValue}) {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    if(value.includes('all')){
       setSelectedValue(selectedValue.length === options.length ? [] : options)

    } else{
      setSelectedValue(
        typeof value === 'string' ? value.split(',') : value
      )
    }
   
   
   
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: '100%' }}>
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedValue}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >

          <MenuItem value={'all'}>
              <Checkbox 
                  checked={selectedValue.length === options.length} 
                  indeterminate = {selectedValue.length > 0 && selectedValue.length < options.length}
                  />
              <ListItemText primary={"Select All"} />
          </MenuItem>

          {options.map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={selectedValue.indexOf(option) > -1} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
