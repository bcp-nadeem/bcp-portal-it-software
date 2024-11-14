import useSoftware from "./useSoftware";
import axios from "axios";
import { useState } from "react";

const useVersion = () => {
  const { fetchSoftware } = useSoftware();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addVersion = async (details, close) => {
    setLoading(true);
    setError(null); // Reset error state
    try {
      const { name, parent, status, information, downloadUrl, installUrl } = details;

      console.log(details);

      const formData = new FormData();
      formData.append("name", name);
      formData.append("parent", parent._id);
      formData.append("status", status);
      formData.append("information", information);
      formData.append("downloadUrl", downloadUrl || null);
      formData.append("installUrl", installUrl || null);

      const response = await axios.post(`${import.meta.env.VITE_API_ROOT}/version`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'authToken': localStorage.getItem("accessToken")
        }
      });

      if (response) {
        console.log(response.data);
        alert("Version added!");
        fetchSoftware();
        close();
      }
    } catch (error) {
      setError(error);
      console.error("Error adding version:", error);
    } finally {
      setLoading(false);
    }
  };

  const getTotalVersions = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_ROOT}/version/count`);
      return response.data.data;
    } catch (error) {
      setError(error);
      console.error("Error getting total versions:", error);
    } finally {
      setLoading(false);
    }
  };

  return { addVersion, getTotalVersions, loading, error };
};

export default useVersion;
