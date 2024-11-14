import axios from "axios";
import { useState, useCallback } from "react";

const useCategory = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategory = useCallback(async () => {
    setLoading(true);
    setError(null); // Reset error state
    try {
      const result = await axios.get(`${import.meta.env.VITE_API_ROOT}/category`);
      if (result) {
        console.log("category fetched:", result);
        setCategory(result.data.data.categories);
      }
    } catch (error) {
      setError(error);
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const addCategory = async (data, close, refresh) => {
    setLoading(true);
    setError(null);
    try {
      if (!data) throw new Error("No data provided");
      if (!data.name) throw new Error("No name provided");
      if (!data.status) throw new Error("No status provided");

      const response = await axios.post(
        `${import.meta.env.VITE_API_ROOT}/category`,
        data,
        {
          headers: {
            authToken: localStorage.getItem("accessToken"),
          },
        }
      );

      if (response?.data?.success) {
        console.log(response.data);
        refresh();
        close();
        return true;
      }
    } catch (error) {
      setError(error);
      console.error("Error adding category:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteCategory = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`${import.meta.env.VITE_API_ROOT}/category/${id}`, {
        headers: {
          authToken: localStorage.getItem("accessToken"),
        },
      });
      return true;
    } catch (error) {
      setError(error);
      console.error("Error deleting category:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    category,
    setCategory,
    fetchCategory,
    addCategory,
    deleteCategory,
    loading,
    error,
  };
};

export default useCategory;
