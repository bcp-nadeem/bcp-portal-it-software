import { useEffect } from "react";


const useSoftware = ()=>{

    useEffect(()=>{
        fetchSoftware()
    },[])
    const fetchSoftware = ()=>{
        console.log("software fetched");
    }
    
    const addSoftware = ()=>{
        console.log("clicked");
        
      }

      return {addSoftware}
}

export default useSoftware