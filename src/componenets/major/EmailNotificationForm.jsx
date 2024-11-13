import React, { useEffect, useState } from 'react';
import { FormControl, FormGroup, Paper } from "@mui/material";
import axios from "axios";
import UserMultiSelect from "./UserMultiSelect";
import CategoryDropdown from "./CategoryDropdown";
import VersionDropdown from "./VersionDropdown";
import TextEditor from "./TextEditor";
import PrimaryButton from "../minor/PrimaryButton";
import useSoftware from "../../hooks/useSoftware";

const INITIAL_FORM_STATE = {
  users: [],
  category: "",
  subject: "",
  parent: null,
  version: null
};

const EmailNotificationForm = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const { software, fetchSoftware } = useSoftware();

  // Reset version when parent software changes
  useEffect(() => {
    if (formData.parent) {
      setFormData(prev => ({ ...prev, version: null }));
    }
  }, [formData.parent]);

  useEffect(() => {
    fetchSoftware();
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_API_ROOT}/auth/user/all`,
        {
          headers: {
            authToken: localStorage.getItem("accessToken"),
          },
        }
      );
      setUsers(result.data.data);
    } catch (error) {
      setError("Failed to fetch users");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setError(null);
    
    try {
        console.log(formData);
    } catch (error) {
      setError("Failed to submit form");
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateForm = () => {
    if (!formData.users.length) {
      setError("Please select at least one user");
      return false;
    }
    if (!formData.category) {
      setError("Please select a category");
      return false;
    }
    if (formData.category === "Version Update" && (!formData.parent || !formData.version)) {
      setError("Please select both software and version");
      return false;
    }
    if (!formData.subject) {
      setError("Please enter a subject");
      return false;
    }
    return true;
  };

  return (
    <Paper className="mt-20" elevation={0}>
      <FormGroup className="d-flex model-from-style">
        {error && (
          <div className="error-message text-red-500 mb-4">
            {error}
          </div>
        )}
        
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
          <CategoryDropdown
            value={formData.category}
            setValue={setFormData}
            label="category"
            title="Select Category"
            options={["Version Update", "Option 2"]}
          />
        </FormControl>

        {formData.category === "Version Update" && (
          <FormControl className="from-controll">
            <div className="d-flex gap-10 cj-center width-100">
              <CategoryDropdown
                options={software || []}
                value={formData.parent}
                setValue={setFormData}
                label="parent"
                title="Select Software"
              />
              <VersionDropdown
                options={formData?.parent?.version || []}
                value={formData.version}
                setValue={setFormData}
                label="version"
                title="Select Version"
                disabled={!formData.parent}
              />
            </div>
          </FormControl>
        )}

        <FormControl className="from-controll">
          <TextEditor
            label="Subject"
            value={formData}
            setValue={setFormData}
          />
        </FormControl>

        <FormControl className="from-controll d-flex text-center items-center justify-center mt-8">
          <PrimaryButton
            variant="contained"
            title={isSubmitting ? "Submitting..." : "Submit"}
            size="medium"
            onClickHandler={handleSubmit}
            disabled={isSubmitting}
            className="w-full"
          />
        </FormControl>
      </FormGroup>
    </Paper>
  );
};

export default EmailNotificationForm;