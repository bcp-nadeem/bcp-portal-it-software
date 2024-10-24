import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Labels from '../minor/Labels'
import { useState } from 'react';

const StatusDropdown = ({id, className, title, value ,setValue, label}) => {

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
        <MenuItem value="active">Active</MenuItem>
        <MenuItem value="inactive">Inactive</MenuItem>
        </Select>
  </FormControl>
  )
}

export default StatusDropdown