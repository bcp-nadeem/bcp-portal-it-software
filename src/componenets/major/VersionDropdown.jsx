import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const VersionDropdown = ({
  title,
  value,
  setValue,
  label,
  options = [],
  disabled = false,
  className = ""
}) => {
  const handleVersionDropdownChange = (event) => {
    const selectedVersion = options.find(version => version._id === event.target.value);
    setValue(prev => ({ ...prev, [label]: selectedVersion }));
  };

  // Ensure we have a valid value for the Select component
  const selectValue = value?._id || "";

  return (
    <FormControl 
      variant="standard" 
      sx={{ minWidth: 120 }}
      className={className}
      disabled={disabled}
    >
      <InputLabel>{title}</InputLabel>
      <Select
        value={selectValue}
        onChange={handleVersionDropdownChange}
        label={label}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options?.map((version) => (
          <MenuItem 
            key={version._id} 
            value={version._id}
          >
            {version.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default VersionDropdown;