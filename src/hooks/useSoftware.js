import { useEffect,useState } from "react";
import axios from "axios";

const useSoftware = ()=>{
    const [software,setSoftware]=useState([])

    useEffect(()=>{
        fetchSoftware()
    },[])
    const fetchSoftware = async()=>{
        try {
            const result = await axios.get(`${import.meta.env.VITE_API_ROOT}/software`)
            setSoftware(result.data.softwares);
            console.log(software);
            
            
        } catch (e) {
            console.log(e);
            
        }
    }
    
    const addSoftware = (data)=>{
        console.log(data);
        
      }

      return {software, addSoftware}
}

export default useSoftware