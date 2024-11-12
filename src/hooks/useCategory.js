import axios from "axios"
import {  useState, useCallback } from "react";
const useCategory = () => {
    const [category, setCategory] = useState([]);
  
    const fetchCategory = useCallback(async () => {
      try {
        const result = await axios.get(`${import.meta.env.VITE_API_ROOT}/category`);
        if (result) {
          console.log("category fetched :", result);
          setCategory(result.data.data.categories);
        }
      } catch (error) {
        throw error;
      }
    },[])

    const addCategory = async (data, close, refresh) => {
      try {
        if(!data) throw new Error("No data provided");
        if(!data.name) throw new Error("No name provided");
        if(!data.status) throw new Error("No status provided");
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
          refresh()
          close();
          return true;
        }
      } catch (error) {
        throw error;
      }
    };
  
    const deleteCategory = async (id) => {
      try {
        await axios.delete(`${import.meta.env.VITE_API_ROOT}/category/${id}`, {
          headers: {
            authToken: localStorage.getItem("accessToken"),
          },
        });
        return true;
      } catch (error) {
        throw error;
      }
    };
  
    return { category, setCategory, fetchCategory, addCategory, deleteCategory };
  };
  
  export default useCategory;