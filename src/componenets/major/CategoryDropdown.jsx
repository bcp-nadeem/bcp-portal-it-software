import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Labels from '../minor/Labels';

const CategoryDropdown = ({ id, className, title, value, setValue, label, options = [] }) => {
  const handleChangeSelect = (event) => {
    const selectedCategory = options.find((item) => 
      (item._id === event.target.value) || (item === event.target.value)
    );
    setValue((prevState) => ({ ...prevState, [label.toLowerCase()]: selectedCategory }));
  };

  // Determine the current value for the Select component
  const getCurrentValue = () => {
    if (!value) return "";
    
    // If value is a string (for simple options like "Version Update")
    if (typeof value === 'string') return value;
    
    // If value is an object (for software objects with _id)
    if (value._id) return value._id;
    
    return "";
  };

  // Debug logging
  console.log('Current value:', value);
  console.log('Computed select value:', getCurrentValue());
  console.log('Available options:', options.map(item => item._id || item));

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
      <Labels title={title} />
      <Select
        labelId="demo-simple-select-standard-label"
        id={id}
        className={className}
        value={getCurrentValue()}
        onChange={handleChangeSelect}
        label={title}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options?.map((item) => {
          // For string options (like "Version Update")
          if (typeof item === 'string') {
            return (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            );
          }
          
          // For object options (like software with _id and name)
          return (
            <MenuItem key={item._id} value={item._id}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CategoryDropdown;