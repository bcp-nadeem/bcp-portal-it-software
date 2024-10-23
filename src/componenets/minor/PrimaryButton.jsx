import Button from '@mui/material/Button';


const PrimaryButton = ({color, variant, title , onClickHander, className, size}) => {
  return (
   <>
      <Button color={color} variant={variant} onClick={onClickHander} size={size} className={`${className} button` }>{title}</Button>
   </>
    
  )
}

export default PrimaryButton
