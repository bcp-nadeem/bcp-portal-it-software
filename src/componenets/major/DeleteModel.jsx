import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Heading from '../minor/Heading';
import { Button, Divider, FormControl, FormGroup, MenuItem, Paper } from '@mui/material';
import PrimaryButton from '../minor/PrimaryButton';

import { FiTrash2 } from 'react-icons/fi';
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

const DeleteModel = ({handleDelete}) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {deleteSoftware} = useSoftware()

  return (
    <>
    <Button className='danger-btn' onClick={handleOpen} disableRipple>
        <FiTrash2  />
    </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Heading className="mb-5" heading="Delete Software" />
            <Divider />
            <Paper className='mt-20' elevation={0}>
              <FormGroup className='d-flex model-from-style'>
                <FormControl className='from-controll  mt-30'>
                  <div className='d-flex text-center ai-center cj-center'>
                    <PrimaryButton color="error" variant="contained" title="Delete" size="medium" onClickHander={handleDelete} className="btn-ws-100"></PrimaryButton> &nbsp;&nbsp;
                    <PrimaryButton variant="contained" title="Cancel" size="medium" onClickHander="" className="btn-ws-100"></PrimaryButton>
                  </div>
                </FormControl>
            </FormGroup>
            </Paper>
        </Box>
      </Modal>
    </>
  )
}

export default DeleteModel