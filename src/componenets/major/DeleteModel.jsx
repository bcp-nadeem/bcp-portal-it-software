import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Heading from '../minor/Heading';
import { Button, Divider, FormControl, FormGroup, Paper } from '@mui/material';
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
  p: 4,
};

const DeleteModel = ({ id, handleDelete, onSuccess }) => {
  const [open, setOpen] = useState(false);
  const { deleteSoftware } = useSoftware();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onClick = async () => {
    try {
      await deleteSoftware(id);
      handleClose();
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Error deleting software:', error);
    }
  };

  return (
    <>
      <Button className="danger-btn" onClick={handleOpen} disableRipple>
        <FiTrash2 />
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
          <Paper className="mt-20" elevation={0}>
            <FormGroup className="d-flex model-from-style">
              <FormControl className="from-controll mt-30">
                <div className="d-flex text-center ai-center cj-center">
                  <PrimaryButton
                    color="error"
                    variant="contained"
                    title="Delete"
                    size="medium"
                    onClickHandler={onClick}
                    className="btn-ws-100"
                  />
                  &nbsp;&nbsp;
                  <PrimaryButton
                    variant="contained"
                    title="Cancel"
                    size="medium"
                    onClickHandler={handleClose}
                    className="btn-ws-100"
                  />
                </div>
              </FormControl>
            </FormGroup>
          </Paper>
        </Box>
      </Modal>
    </>
  );
};

export default DeleteModel;