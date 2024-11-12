import useSoftware from "./useSoftware";
import axios from "axios";
const useVersion = () => {
    const {fetchSoftware} = useSoftware()
  const addVersion = async(details, close) => {
    try {
      const { name, parent, status, information, downloadUrl, installUrl } =
        details;

        console.log(details);
        

      const formData = new FormData();
      formData.append("name", name);
      formData.append("parent", parent._id);
      formData.append("status", status);
      formData.append("information", information);
      formData.append("downloadUrl", downloadUrl || null);
      formData.append("installUrl", installUrl || null);

      const response = await axios.post(`${import.meta.env.VITE_API_ROOT}/version`,formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',  // Automatically handled by the browser
                'authToken' : localStorage.getItem("accessToken")
              }
        }
    )
    if(response){
        console.log(response.data);
        alert("version added!!!")
        fetchSoftware()
        close()
    }
    } catch (error) {
      console.log(error);
    }
  };

  const getTotalVersions = async() => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_ROOT}/version/count`); 
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  return { addVersion, getTotalVersions };
};

export default useVersion;
