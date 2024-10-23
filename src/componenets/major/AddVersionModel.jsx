import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Heading from '../minor/Heading';
import { Divider, FormControl, FormGroup, Paper } from '@mui/material';
import InputTypes from '../minor/InputTypes';
import CategoryDropdown from './CategoryDropdown';
import PrimaryButton from '../minor/PrimaryButton';
import UseTextEditor from '../major/TextEditor';
import StatusDropdown from './StatusDropDown';
import UserDropDown from './UserDropDown';
import UploadButton from '../minor/UploadButton';

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 'auto',
    bgcolor: 'background.paper',
    border: '1px solid #eee',
    boxShadow: 24,
    p: 4
  };

const AddVersionModel = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Add Version</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Heading className="mb-5" heading="Add Software Version" />
            <Divider />
            <Paper className='mt-20' elevation={0}>
              <FormGroup className='d-flex model-from-style'>
                <FormControl className='from-controll'>
                  <InputTypes id="standard-basic" className="" type="text" labe="Standard" variant="standard" placeholder="Enter Version Name" />
                </FormControl>

                <FormControl className='from-controll'>
                  <CategoryDropdown id="" className="margin-none" title="Select Software" />
                </FormControl>

                <FormControl className='from-controll'>
                    <UserDropDown title="Select User" />
                </FormControl>

                <FormControl className='from-controll'>
                    <StatusDropdown title="Select Status" />
                </FormControl>

                <FormControl className='from-controll'>
                  <UseTextEditor  />
                </FormControl>

                <FormControl className='from-controll'>
                    <div className='d-flex ai-center cj-center'>
                        <UploadButton title="Download File" onClickHander="" className="" />&nbsp;
                        <UploadButton title="Install File" onClickHander="" className="" />
                    </div>
                </FormControl>

                <Divider className='mb-20' />

                <FormControl className='from-controll d-flex text-center ai-center cj-center mt-20'>
                  <PrimaryButton variant="contained" title="Submit" size="medium" onClickHander="" className="btn-ws-100"></PrimaryButton>
                </FormControl>
            </FormGroup>
            </Paper>
        </Box>
      </Modal>
    </>
  )
}

export default AddVersionModel