import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import Heading from "../minor/Heading";
import {
  Button,
  Divider,
  FormControl,
  FormGroup,
  Paper,
} from "@mui/material";
import InputTypes from "../minor/InputTypes";
import CategoryDropdown from "./CategoryDropdown";
import PrimaryButton from "../minor/PrimaryButton";
import UploadButton from "../minor/UploadButton";
import UseTextEditor from "../major/TextEditor";
import { RiEditLine } from "react-icons/ri";
import useSoftware from "../../hooks/useSoftware";
import useCategory from "../../hooks/useCategory";
import StatusDropdown from "./StatusDropDown";

const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: "auto",
  bgcolor: "background.paper",
  border: "1px solid #eee",
  boxShadow: 24,
  p: 4,
};

const EditVersioneModel = ({ data, onSuccess }) => {
  const [open, setOpen] = useState(false);
  const [dataToAdd, setDataToAdd] = useState({});
  const { updateSoftware } = useSoftware();
  const { category, fetchCategory } = useCategory();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setDataToAdd(data);
  }, [data]);

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleSubmit = async () => {
    const success = await updateSoftware(dataToAdd);
    if (success) {
      handleClose();
      if (onSuccess) {
        onSuccess();
      }
    }
  };

  return (
    <>
      <Button className="success-btn" onClick={handleOpen} disableRipple>
        <RiEditLine />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Heading className="mb-5" heading="Edit Version Details" />
          <Divider />
          <Paper className="mt-20" elevation={0}>
            <FormGroup className="d-flex model-from-style">
              <FormControl className="from-controll">
                <InputTypes
                  label="name"
                  value={dataToAdd?.name}
                  setValue={setDataToAdd}
                  id="standard-basic"
                  type="text"
                  variant="standard"
                  placeholder="Enter Version Name"
                />
              </FormControl>
              <FormControl className="from-controll">
                <StatusDropdown options="" value="" setValue="" label="status" title="Select Status" />
              </FormControl>

                <FormControl className="from-controll">
                    <UseTextEditor
                    label="information"
                    value={dataToAdd}
                    setValue={setDataToAdd}
                    />
                </FormControl>

              
                <FormControl className='from-controll'>
                    <div className='d-flex ai-center cj-center'>
                        <UploadButton label="downloadUrl" value="" setValue="" title="Download File" onClickHander="" className="" />&nbsp;
                        <UploadButton label="installUrl" value="" setValue="" title="Install File" onClickHander="" className="" />
                    </div>
                </FormControl>

                <Divider className='mb-20' />

              <FormControl className="from-controll d-flex text-center ai-center cj-center mt-30">
                <div className="d-flex gap-10">
                  <PrimaryButton
                    variant="contained"
                    title="Confirm"
                    size="medium"
                    onClickHandler={handleSubmit}
                    className="btn-ws-100"
                  />
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

export default EditVersioneModel;