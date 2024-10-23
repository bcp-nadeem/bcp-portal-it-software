import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Labels from '../minor/Labels'
import { useState } from 'react';

const StatusDropdown = ({id, className, title}) => {

    const [select, setSelect] = useState('');

    const handleChangeSelect = (event) => {
        setSelect(event.target.value);
    };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 150}}>
        <Labels title={title} />
        <Select
        labelId="demo-simple-select-standard-label"
        id={id}
        className={className}
        value={select}
        onChange={handleChangeSelect}
        label={title}
        >
        <MenuItem value="">
            <em>None</em>
        </MenuItem>
        <MenuItem value="Active">Active</MenuItem>
        <MenuItem value="Inactive">Inactive</MenuItem>
        </Select>
  </FormControl>
  )
}

export default StatusDropdown