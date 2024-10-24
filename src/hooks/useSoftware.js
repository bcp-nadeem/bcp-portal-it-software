import { useEffect } from "react";


const useSoftware = ()=>{

    useEffect(()=>{
        fetchSoftware()
    },[])
    const fetchSoftware = ()=>{
        
        console.log("software fetched");
    }
    
    const addSoftware = (data)=>{
        console.log(data);
        
      }

      return {addSoftware}
}

export default useSoftware