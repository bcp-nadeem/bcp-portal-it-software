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
    
    const addSoftware = async(data)=>{
        try {
            const {name, information, category, seats, image } = data
            console.log(data);
            
            const formData = new FormData();
            formData.append('name',name)
            formData.append('information',information)
            formData.append('category',category)
            formData.append('seats',seats)
            formData.append('imageUrl',image)
            console.log(formData)
            const response = await axios.post(`${import.meta.env.VITE_API_ROOT}/software`,formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',  // Automatically handled by the browser
                        'authToken' : localStorage.getItem("accessToken")
                      }
                }
            )
            if(response){
                console.log(response.data);
                alert("Software added!!!")
                setSoftware([...software,response.data.software])
            }
        } catch (error) {
           console.log(error);
           
        }
        
      }

      return {software, fetchSoftware, addSoftware}
}

export default useSoftware