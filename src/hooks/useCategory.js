import axios from "axios"
import { useEffect, useState } from "react";
const useCategory=()=>{
    const [category,setCategory]=useState("");

    const fetchCategory =async()=>{
        try {
            const result = await axios.get(`${import.meta.env.VITE_API_ROOT}/category`)
            if(result){
                console.log("category fetched :", result);
                setCategory(result.data.data.categories)
            }
        } catch (error) {
            throw error
        }
    }
    return {category,setCategory, fetchCategory};
}

export default useCategory