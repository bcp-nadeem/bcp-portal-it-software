import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Labels from './Labels';
import { useState } from 'react';


const Dropdowns = ({id, className, value, onChange, title}) => {

    const [select, setSelect] = useState('');

    const handleChangeSelect = (event) => {
        setSelect(event.target.value);
    };


  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 150}}>
        <Labels title="Employee" />
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
        <MenuItem value={10}>1</MenuItem>
        <MenuItem value={20}>2</MenuItem>
        <MenuItem value={30}>3</MenuItem>
        </Select>
  </FormControl>
  )
}

export default Dropdowns