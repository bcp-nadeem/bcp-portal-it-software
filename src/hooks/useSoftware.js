import { useEffect } from "react";


const useSoftware = ()=>{

    useEffect(()=>{
        fetchSoftware()
    },[])
    const fetchSoftware = ()=>{
        console.log("software fetched");
    }
    
    const handleClick = ()=>{
        console.log("clicked");
        
      }

      return {handleClick}
}

export default useSoftware