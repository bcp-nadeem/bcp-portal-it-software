import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { FiUpload } from "react-icons/fi";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const UploadButton = ({title , onClickHander, className}) => {
  return (
    <>
    <Button
      component="label"
      onClick={onClickHander} 
      className={`${className}` }
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<FiUpload />}
    >
      {title}
      <VisuallyHiddenInput
        type="file"
        onChange={(event) => console.log(event.target.files)}
        multiple
      />
    </Button>
    </>
  )
}

export default UploadButton