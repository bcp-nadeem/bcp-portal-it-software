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
  
    const deleteCategory = async (id) => {
      try {
        await axios.delete(`${import.meta.env.VITE_API_ROOT}/category/${id}`, {
          headers: {
            authToken: localStorage.getItem("accessToken"),
          },
        });
        setCategory(category.filter((cat) => cat._id !== id));
        return true;
      } catch (error) {
        throw error;
      }
    };
  
    return { category, setCategory, fetchCategory, deleteCategory };
  };
  
  export default useCategory;