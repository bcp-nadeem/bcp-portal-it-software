import { useEffect,useState } from "react";
import axios from "axios";

const useSoftware = ()=>{
    const [software,setSoftware]=useState([])

   
    const fetchSoftware = async()=>{
        try {
            const result = await axios.get(`${import.meta.env.VITE_API_ROOT}/software`)
            setSoftware(result.data.softwares);
            console.log(software);
            
            
        } catch (e) {
            console.log(e);
            
        }
    }

    const getSoftwareById = async(id,setValue)=>{
        try {
            const result = await axios.get(`${import.meta.env.VITE_API_ROOT}/software/${id}`)
            if(result){
                setValue(result.data.software)
            }
        } catch (e) {
            console.log(e);
            
        }
    }
    
    const addSoftware = async(data, close)=>{
        try {
            const {name, information, category, seats, image } = data
            console.log(data);
            
            const formData = new FormData();
            formData.append('name',name)
            formData.append('information',information)
            formData.append('category',category._id)
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
                close()
            }
        } catch (error) {
           console.log(error);
           
        }
        
      }
      const updateSoftware = async(data, close)=>{
        try {
            const {name, information, category, seats, image } = data
            console.log(data);
            
            const formData = new FormData();
            formData.append('name',name)
            formData.append('information',information)
            formData.append('category',category._id)
            formData.append('seats',seats)
            if(image){
                formData.append('imageUrl',image)
            }
            const response = await axios.put(`${import.meta.env.VITE_API_ROOT}/software/${data._id}`,formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',  // Automatically handled by the browser
                        'authToken' : localStorage.getItem("accessToken")
                      }
                }
            )
            if(response){
                setSoftware(prev => 
                    prev.map(soft => {
                        if (soft._id === response.data.software._id) {
                            console.log("Updating software:", soft, response.data.software);
                            return {
                                ...soft, // Keep other existing fields
                                seats: Number(response.data.software.seats), // Convert to number
                                category: { _id: response.data.software.category, name: 'Your Category Name' }, // Ensure it's an object
                                // Spread other fields if necessary
                                ...response.data.software, // Keep any other properties
                            };
                        }
                        return soft; // Return unchanged
                    })
                );
                
                
                                close()
            }
        } catch (error) {
           console.log(error);
           
        }
            
      }
      const deleteSoftware = async(id)=>{
        try {
            console.log(id);
            const result = await axios.delete(`${import.meta.env.VITE_API_ROOT}/software/${id}`,{
                headers: {
                    'authToken' : localStorage.getItem("accessToken")
                  }
            })
            if(result){
                setSoftware(prev => prev.filter(soft => soft._id !== id))
                close()
            }
           
        } catch (error) {
            console.log(error);
            
        }
      }
      useEffect(()=>{
        fetchSoftware()
    },[])
      return {software, fetchSoftware, addSoftware, getSoftwareById, updateSoftware, deleteSoftware}
}

export default useSoftware