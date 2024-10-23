import InputLabel from '@mui/material/InputLabel';

const Labels = ({id, title}) => {
  return (
    <InputLabel id={id}>{title}</InputLabel>
  )
}

export default Labels