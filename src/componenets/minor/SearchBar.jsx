import TextField from '@mui/material/TextField';

const SearchBar = ({variant, title, className}) => {
  return (
    <TextField
          id="standard-search"
          label={title}
          type="search"
          variant={variant}
          className={className}
    />
  )
}

export default SearchBar