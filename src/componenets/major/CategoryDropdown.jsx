import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Labels from '../minor/Labels'
import { useState } from 'react';
import useCategory from '../../hooks/useCategory';

const CategoryDropdown = ({ id, className, title, value, setValue, label, options }) => {
    const handleChangeSelect = (event) => {
      const selectedCategory = options.find((item) => item._id === event.target.value);
      setValue((prevState) => ({ ...prevState, [label.toLowerCase()]: selectedCategory }));
    };
  
    return (
      <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
        <Labels title={title} />
        <Select
          labelId="demo-simple-select-standard-label"
          id={id}
          className={className}
          value={value || ""} // Use empty string if value is undefined
          onChange={handleChangeSelect}
          label={title}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options &&
            options.length > 0 &&
            options.map((item) => (
              <MenuItem key={item._id} value={item._id}>
                {item.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    );
};

  

export default CategoryDropdown