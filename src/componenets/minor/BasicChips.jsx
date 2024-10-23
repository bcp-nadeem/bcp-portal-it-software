import Chip from '@mui/material/Chip';

const BasicChips = ({label, variant, size}) => {
  return (
    <Chip label={label} variant={variant} size={size} />
  )
}

export default BasicChips