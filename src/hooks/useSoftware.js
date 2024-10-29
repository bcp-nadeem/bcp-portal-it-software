import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const useSoftware = () => {
  const [software, setSoftware] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSoftware = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_API_ROOT}/software`,
        {
          headers: {
            authToken: localStorage.getItem("accessToken"),
          },
        }
      );
      setSoftware(result.data.data.softwares);
    } catch (e) {
      setError(e.message);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getSoftwareById = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_API_ROOT}/software/${id}`,
        {
          headers: {
            authToken: localStorage.getItem("accessToken"),
          },
        }
      );
      console.log(result.data.data);
      
      return result.data.data;
    } catch (e) {
      setError(e.message);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const addSoftware = async (data, close) => {
    setIsLoading(true);
    setError(null);
    try {
      const { name, information, category, seats, image } = data;
      const formData = new FormData();
      formData.append("name", name);
      formData.append("information", information);
      formData.append("category", category._id);
      formData.append("seats", seats);
      formData.append("imageUrl", image);

      const response = await axios.post(
        `${import.meta.env.VITE_API_ROOT}/software`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authToken: localStorage.getItem("accessToken"),
          },
        }
      );

      if (response?.data?.success) {
        await fetchSoftware(); // Refresh the entire list
        close?.();
        return true;
      }
      return false;
    } catch (error) {
      setError(error.message);
      console.error(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const updateSoftware = async (data, close) => {
    setIsLoading(true);
    setError(null);
    try {
      const { name, information, category, seats, image } = data;
      const formData = new FormData();
      formData.append("name", name);
      formData.append("information", information);
      formData.append("category", category._id);
      formData.append("seats", seats);
      if (image) {
        formData.append("imageUrl", image);
      }

      const response = await axios.put(
        `${import.meta.env.VITE_API_ROOT}/software/${data._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authToken: localStorage.getItem("accessToken"),
          },
        }
      );

      if (response?.data?.success) {
        await fetchSoftware(); // Refresh the entire list
        close?.();
        return true;
      }
      return false;
    } catch (error) {
      setError(error.message);
      console.error(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteSoftware = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_ROOT}/software/${id}`,
        {
          headers: {
            authToken: localStorage.getItem("accessToken"),
          },
        }
      );

      if (response?.data?.success) {
        await fetchSoftware(); // Refresh the entire list
        return true;
      }
      return false;
    } catch (error) {
      setError(error.message);
      console.error(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSoftware();
  }, [fetchSoftware]);

  return {
    software,
    isLoading,
    error,
    fetchSoftware,
    getSoftwareById,
    addSoftware,
    updateSoftware,
    deleteSoftware,
  };
};

export default useSoftware;
