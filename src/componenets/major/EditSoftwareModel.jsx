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

const EditSoftwareModel = ({ data, onSuccess }) => {
  const [open, setOpen] = useState(false);
  const [dataToAdd, setDataToAdd] = useState({});
  const { updateSoftware } = useSoftware();
  const { category, fetchCategory } = useCategory();
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

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
          <Heading className="mb-5" heading="Edit Software" />
          <Divider />
          <Paper className="mt-15" elevation={0}>
            <div className="asm-img-upload d-flex gap-10 pt-20 pb-20">
              <div className="upload-img-preview">
                <img
                  src={imagePreviewUrl ||
                    (dataToAdd?.imageUrl?.startsWith("uploads") &&
                      import.meta.env.VITE_API_ASSET +
                        "/" +
                        dataToAdd?.imageUrl) 
                    
                  }
                  alt="Software"
                />
              </div>
              <div className="upload-img-btn">
                <div className="mt-20">
                  <UploadButton
                    label="image"
                    setValue={setDataToAdd}
                    setImagePreviewUrl={setImagePreviewUrl}
                    title="Choose File"
                    className=""
                  />
                </div>
                <br />
                <Divider />
                <div>
                  <label>
                    Allowed JPG, JPEG or PNG. Image Resolution: 225px * 225px.
                    Max size of 800K
                  </label>
                </div>
              </div>
            </div>
          </Paper>
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
                  placeholder="Enter Software Name"
                />
              </FormControl>
              <FormControl className="from-controll">
                <CategoryDropdown
                  options={category}
                  label="category"
                  value={dataToAdd?.category?._id}
                  setValue={setDataToAdd}
                  className="margin-none"
                  title="Select Category"
                />
              </FormControl>
              <FormControl className="from-controll">
                <InputTypes
                  label="seats"
                  value={dataToAdd?.seats}
                  setValue={setDataToAdd}
                  id="standard-basic"
                  type="number"
                  variant="standard"
                  placeholder="Enter Software Seats"
                />
              </FormControl>
              <FormControl className="from-controll">
                <UseTextEditor
                  label="information"
                  value={dataToAdd}
                  setValue={setDataToAdd}
                />
              </FormControl>
              <FormControl className="from-controll d-flex text-center ai-center cj-center mt-30">
                <PrimaryButton
                  variant="contained"
                  title="Confirm"
                  size="medium"
                  onClickHandler={handleSubmit}
                  className="btn-ws-100"
                />
              </FormControl>
            </FormGroup>
          </Paper>
        </Box>
      </Modal>
    </>
  );
};

export default EditSoftwareModel;