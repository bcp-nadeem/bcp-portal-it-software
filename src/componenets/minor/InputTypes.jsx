import TextField from '@mui/material/TextField';


const InputTypes = ({ id, value, setValue, className, type, label, variant, placeholder }) => {
  return (
    <TextField
      id={id}
      value={value}
      onChange={(e) => setValue(prevState => ({ ...prevState, [label.toLowerCase()]: e.target.value }))}
      className={className}
      type={type}
      label={label}
      variant={variant}
      placeholder={placeholder}
    />
  );
};

export default InputTypes;
