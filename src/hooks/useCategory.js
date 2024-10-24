import axios from "axios"
import { useEffect, useState } from "react";
const useCategory=()=>{
    const [category,setCategory]=useState("");

    const fetchCategory =async()=>{
        try {
            const result = await axios.get(`${import.meta.env.VITE_API_ROOT}/category`)
            if(result){
                console.log("category fetched :", result.data.categories[0]);
                setCategory(result.data.categories)
            }
        } catch (error) {
            throw error
        }
    }
    useEffect(()=>{fetchCategory()},[]);
    return {category,setCategory};
}

export default useCategory