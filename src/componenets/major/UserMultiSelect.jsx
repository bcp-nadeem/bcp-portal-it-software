import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

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

const UserMultiSelect = ({ data, setValue, label, value }) => {
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setPersonName(typeof value === 'string' ? value.split(',') : value);

    // Update formData in the parent component
    setValue((prevState) => ({
      ...prevState,
      [label]: value.map(user => user.user.employee_email), // Adjust as needed, here we use `employee_email`
    }));
  };

  return (
    <FormControl sx={{ width: 600 }}>
      <InputLabel id="demo-multiple-checkbox-label">Select Users</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput label="Select Users" />}
        renderValue={(selected) =>
          selected.map((user) => `${user.user.employee_first_name} ${user.user.employee_last_name}`).join(', ')
        }
        MenuProps={MenuProps}
      >
        {data.map((user) => (
          <MenuItem key={user?._doc?._id || user?._id} value={user}>
            <Checkbox checked={personName.includes(user)} />
            <ListItemText primary={`${user?.user?.employee_first_name} ${user?.user?.employee_last_name}`} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default UserMultiSelect;
