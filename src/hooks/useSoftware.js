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
      return result.data.data;
    } catch (e) {
      setError(e.message);
      console.error(e);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const getTotalSoftware = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_API_ROOT}/software/count`
      );      
      return result.data.data.totalItems;
    } catch (e) { 
      setError(e.message);
      console.error(e);
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  const addSoftware = async (data, close) => {
    setIsLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        if (key === 'category') {
          formData.append(key, data[key]._id);
        } else if (key === 'image') {
          formData.append('imageUrl', data[key]);
        } else {
          formData.append(key, data[key]);
        }
      });

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
        console.log(response.data);
        close()
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

  const updateSoftware = async (data) => {
    setIsLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        if (key === 'category') {
          formData.append(key, data[key]._id);
        } else if (key === 'image' && data[key]) {
          formData.append('imageUrl', data[key]);
        } else if (key !== 'imageUrl') {
          formData.append(key, data[key]);
        }
      });

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
        await fetchSoftware(); // Refresh the list after updating
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
        await fetchSoftware(); // Refresh the list after deleting
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

  return {
    software,
    isLoading,
    error,
    fetchSoftware,
    getSoftwareById,
    getTotalSoftware,
    addSoftware,
    updateSoftware,
    deleteSoftware,
  };
};

export default useSoftware;