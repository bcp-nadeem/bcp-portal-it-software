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

const UploadButton = ({ title, setValue, className,setImagePreviewUrl }) => {
  const handleFileChange = (event) => {
    const file = event.target.files;
    if (file.length > 0) {
      setValue(prevState => ({
        ...prevState,
        image: file[0]  // Store the selected files in state
      }));
      setImagePreviewUrl(URL.createObjectURL(file[0]));
    }
  };

  return (
    <>
      <Button
        component="label"
        className={className}
        variant="contained"
        startIcon={<FiUpload />}
      >
        {title}
        <VisuallyHiddenInput
          type="file"
          onChange={handleFileChange}
          multiple
        />
      </Button>
    </>
  );
};

export default UploadButton;
