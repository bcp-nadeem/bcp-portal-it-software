import TextField from '@mui/material/TextField';

const InputTypes = ({id, className, type, label, variant, placeholder}) => {
  return (
    <TextField id={id} className={className} type={type} label={label} variant={variant} placeholder={placeholder} />
  )
}

export default InputTypes