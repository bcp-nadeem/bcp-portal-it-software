import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Labels from '../minor/Labels'
import { useState } from 'react';

const StatusDropdown = ({id, className, title, value ,setValue, label, options}) => {

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 150}}>
        <Labels title={title} />
        <Select
        labelId="demo-simple-select-standard-label"
        id={id}
        className={className}
        value={value}
        onChange={(e)=>setValue((prevState) => ({
          ...prevState,
          [label.toLowerCase()]: e.target.value,
        }))}
        label={title}
        >
        <MenuItem value="">
            <em>None</em>
        </MenuItem>
        {
          options && options.length > 0 && options.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))
        }
        </Select>
  </FormControl>
  )
}

export default StatusDropdown