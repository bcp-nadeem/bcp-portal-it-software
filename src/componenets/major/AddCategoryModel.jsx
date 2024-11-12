import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Heading from '../minor/Heading';
import { Button, Divider, FormControl, FormGroup, MenuItem, Paper } from '@mui/material';
import InputTypes from '../minor/InputTypes';
import CategoryDropdown from './CategoryDropdown';
import PrimaryButton from '../minor/PrimaryButton';
import UploadButton from '../minor/UploadButton';
import UseTextEditor from '../major/TextEditor';
import { IoAddSharp } from 'react-icons/io5';
import StatusDropdown from './StatusDropDown';
import useCategory from '../../hooks/useCategory';

const style = {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 'auto',
    bgcolor: 'background.paper',
    border: '1px solid #eee',
    boxShadow: 24,
    p: 4
  };

const AddCategoryModel = ({onSuccess}) => {
    const { addCategory } = useCategory();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [newCategoryValue, setNewCategoryValue] = useState({
      name: '',
      status: '',
    });

  return (
    <>

      <Button
        variant="contained"
        className=""
        onClick={handleOpen}
        disableRipple
      >
        <IoAddSharp /> &nbsp;Add Category
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Heading className="mb-5" heading="Add Category" />
            <Divider />
            <Paper className='mt-20' elevation={0}>
              <FormGroup className='d-flex model-from-style'>
                <FormControl className='from-controll'>
                  <InputTypes id="standard-basic" value={newCategoryValue.name} setValue={setNewCategoryValue} label="Name" className="" type="text" labe="Standard" variant="standard" placeholder="Enter Category Name" />
                </FormControl>
                <FormControl className='from-controll'>
                  <StatusDropdown label="Status" id="" value={newCategoryValue.status} setValue={setNewCategoryValue} className="margin-none" title="Select Status" options={['active', 'inactive']} />
                </FormControl>
                <FormControl className='from-controll d-flex text-center ai-center cj-center mt-30'>
                  <PrimaryButton variant="contained" title="Submit" size="medium" onClickHandler={()=>addCategory(newCategoryValue, handleClose, onSuccess)} className="btn-ws-100"></PrimaryButton>
                </FormControl>
            </FormGroup>
            </Paper>
        </Box>
      </Modal>
    </>
  )
}

export default AddCategoryModel