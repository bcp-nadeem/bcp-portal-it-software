import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Labels from '../minor/Labels'
import { useState } from 'react';
import useCategory from '../../hooks/useCategory';

const CategoryDropdown = ({id, className, title, value="", setValue, label}) => {

    const [select, setSelect] = useState('');

    const handleChangeSelect = (event) => {
        setSelect(event.target.value);
        setValue(prevState => ({ ...prevState, [label.toLowerCase()]: event.target.value }));
    };

    const {category} = useCategory()


  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 150}}>
        <Labels title={title} />
        <Select
        labelId="demo-simple-select-standard-label"
        id={id}
        className={className}
        value={value}
        onChange={handleChangeSelect}
        label={title}
        >
         <MenuItem value="">
            <em>None</em>
        </MenuItem>
        {
            category && category.length>0 && category?.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                    {item.name}
                </MenuItem>
            ))
        }
        </Select>
  </FormControl>
  )
}

export default CategoryDropdown