import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const VersionDropdown = ({id, className, title, value, setValue, label, options}) => {
    const [version_dropdown, setVersionDropDown] = useState('');

    const handleVersionDropdownChange = (event) => {
        setVersionDropDown(event.target.value);
    };
  return (
    <>
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">{title}</InputLabel>
            <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={version_dropdown}
            onChange={handleVersionDropdownChange}
            label={label}
            className="width-100"
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value='1'>1</MenuItem>
            <MenuItem value='2'>2</MenuItem>
            <MenuItem value='3'>3</MenuItem>
            </Select>
        </FormControl>
    </>
  )
}

export default VersionDropdown