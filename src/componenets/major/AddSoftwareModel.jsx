import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Heading from '../minor/Heading';
import { Divider, FormControl, FormGroup, MenuItem, Paper } from '@mui/material';
import InputTypes from '../minor/InputTypes';
import CategoryDropdown from './CategoryDropdown';
import PrimaryButton from '../minor/PrimaryButton';
import UploadButton from '../minor/UploadButton';
import UseTextEditor from '../major/TextEditor';
import { IoAddSharp } from 'react-icons/io5';
import useSoftware from '../../hooks/useSoftware';

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

const AddSoftwareModel = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [dataToAdd, setDataToAdd] = useState({});
    const {addSoftware} = useSoftware()

  return (
    <>

    <MenuItem onClick={handleOpen} disableRipple>
        <IoAddSharp /> &nbsp;Add Software
    </MenuItem>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Heading className="mb-5" heading="Add Software" />
            <Divider />
            <Paper className='mt-15' elevation={0}>
              <div className='asm-img-upload d-flex gap-10 pt-20 pb-20'>
                <div className='upload-img-preview'>
                  <img src={Image} />
                </div>
                <div className='upload-img-btn'>
                  <div className='mt-20'>
                    <UploadButton setValue={setDataToAdd} title="Choose File" onClickHander="" className="" />
                  </div>
                  <br />
                  <Divider />
                  <div>
                    <label htmlFor="">Allowed JPG, JPEG or PNG. Image Resolution: 225px * 225px. Max size of 800K</label>
                  </div>
                </div>
              </div>
            </Paper>
            <Divider />
            <Paper className='mt-20' elevation={0}>
              <FormGroup className='d-flex model-from-style'>
                <FormControl className='from-controll'>
                  <InputTypes label="name" value={dataToAdd?.name} setValue={setDataToAdd} id="standard-basic" className="" type="text" labe="Standard" variant="standard" placeholder="Enter Software Name" />
                </FormControl>
                <FormControl className='from-controll'>
                  <CategoryDropdown id="" label="category" value={dataToAdd?.category} setValue={setDataToAdd} className="margin-none" title="Select Category" />
                </FormControl>
                <FormControl className='from-controll'>
               
                  <InputTypes label="seats" value={dataToAdd?.seats} setValue={setDataToAdd} id="standard-basic" className="" type="number" labe="Standard" variant="standard" placeholder="Enter Software Seats" />
                </FormControl>

                <FormControl className='from-controll'>
                  <UseTextEditor label="information" value={dataToAdd} setValue={setDataToAdd} />
                </FormControl>

                <FormControl className='from-controll d-flex text-center ai-center cj-center mt-30'>
                  <PrimaryButton variant="contained" title="Confirm" size="medium" onClickHander={()=>addSoftware(dataToAdd)} className="btn-ws-100"></PrimaryButton>
                </FormControl>
            </FormGroup>
            </Paper>
        </Box>
      </Modal>
    </>
  )
}

export default AddSoftwareModel