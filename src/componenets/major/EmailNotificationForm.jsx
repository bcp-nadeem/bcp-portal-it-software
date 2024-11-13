import { FormControl, FormGroup, Paper } from "@mui/material";
import InputTypes from "../minor/InputTypes";
import StatusDropdown from "./StatusDropDown";
import PrimaryButton from "../minor/PrimaryButton";
import UserDropDown from "./UserDropDown";
import CategoryDropdown from "./CategoryDropdown";
import UserMultiSelect from "./UserMultiSelect";
import { useEffect, useState } from "react";
import axios from "axios";
import TextEditor from "./TextEditor";
import VersionDropdown from "./VersionDropdown";

const EmailNotificationForm = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    users: [],
    category: "",
    subject: "",
  });

  const getAllUsers = async () => {
    try {
      const result = await axios.get(`${import.meta.env.VITE_API_ROOT}/auth/user/all`, {
        headers: {
          authToken: localStorage.getItem("accessToken"),
        },
      });
      setUsers(result.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Paper className="mt-20" elevation={0}>
      <FormGroup className="d-flex model-from-style">
        <FormControl className="from-controll">
          <UserMultiSelect
            data={users}
            setValue={setFormData}
            label="users"
            value={formData.users}
            title="Select Users"
          />
        </FormControl>
        <FormControl className="from-controll">
          <CategoryDropdown id="" value={formData.category} setValue={setFormData} label="category" className="margin-none" title="Select Category" options={["Option 1", "Option 2"]} />
        </FormControl>

        <FormControl className="from-controll">
          <div className="d-flex gap-10 cj-center width-100 MuiFormControl-style">
            <CategoryDropdown options="" value="" label="parent" setValue="" id="" className="margin-none" title="Select Software" />
            <VersionDropdown options="" value="" label="parent" setValue="" id="" className="margin-none" title="Select Version" />
          </div>
        </FormControl>


        <FormControl className="from-controll">
          <TextEditor
            id="standard-basic"
            label="Subject"
            value={formData}
            setValue={setFormData}
          />
        </FormControl>
        <FormControl className="from-controll d-flex text-center ai-center cj-center mt-30">
          <PrimaryButton
            variant="contained"
            title="Submit"
            size="medium"
            onClickHandler={() => console.log("Submit Clicked", formData)}
            className="btn-ws-100"
          />
        </FormControl>
      </FormGroup>
    </Paper>
  );
};

export default EmailNotificationForm;
