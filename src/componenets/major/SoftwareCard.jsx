import { Box, Button, Card } from "@mui/material"
import BasicChips from "../minor/BasicChips"
import { useEffect, useState } from "react";
import SoftwareQuiekInfo from "./SoftwareQuiekInfo";
import QuillEditor from "./QuillEditor";
import { Link } from "react-router-dom";

const SoftwareCard = ({id, src, title, category, description, version}) => {    

    const [isOpenSoftwareInfo, setIsOpenSoftwareInfo] = useState(null);
    const [prevOpen, setPrevOpen] = useState(null);

    const handleClickOpen = (id) => {

        console.log(setIsOpenSoftwareInfo(id));
       
    };
    
    const handleClickClose = () => {
        setIsOpenSoftwareInfo(null);
    };

    useEffect(() => {
        console.log(setPrevOpen(isOpenSoftwareInfo)); // Update the previous count
    }, [isOpenSoftwareInfo]);

    // const [isOpenSoftwareInfo, setIsOpenSoftwareInfo] = useState(false); 

    // const SoftwareInfoPopUp = (id) => {

    //     setIsOpenSoftwareInfo(id);

    //     // setIsOpenSoftwareInfo((prev) => (prev === id ? null : id));
    //     // console.log(id)

    // }

    const [selectedVersion, setSelectedVersion] = useState(version[version?.length-1]);

  return (
    <>
          
            <Card className="software-grid">
                <div className="software-grid-img">
                    {src ? <img src={src} alt="" /> : <h1>hello</h1>}
                </div>
                <div className="software-grid-head">
                <Link to={`/software-details/${id}`} ><h3>{title}</h3></Link>
                </div>
                <div className="software-grid-category">
                    <label htmlFor="">{category}</label>
                </div>
                {/* <div className="software-grid-description">
                <QuillEditor description={description} />
                </div> */}
                <div className="software-grid-tags">
                    {
                        version && version.length>0 && 
                            <BasicChips onClick={() => setSelectedVersion(version[version.length-1])} key={version[version.length-1]._id} label={version[version.length-1].name} size="small" ></BasicChips>
                         || <BasicChips label={"No version found"} size="small" ></BasicChips>
                    }
                </div>
                <div className="software-grid-install-btn">
                    {
                        selectedVersion &&  selectedVersion?.installUrl && <Button href={selectedVersion?.installUrl} >Install {selectedVersion.name}</Button>
                    }
                    {
                        selectedVersion &&  selectedVersion?.downloadUrl && <Button href={selectedVersion?.downloadUrl} >Download {selectedVersion.name}</Button>
                    }

                    {
                        !isOpenSoftwareInfo ? 
                        <Button onClick={() => handleClickOpen(id)}>
                            {isOpenSoftwareInfo ? "Close" : "Quick Info"}
                        </Button>
                        :
                        <Button onClick={() => handleClickClose(id)}>
                            {isOpenSoftwareInfo ? "Close" : "Quick Info"}
                        </Button>
                    }

                    
                </div>
            </Card>
                    
        {isOpenSoftwareInfo ? 
            
            <SoftwareQuiekInfo id={id} src={src} title={title} category={category} description={description} version={selectedVersion} ></SoftwareQuiekInfo>
        : 
        ""}
    </>
  )
}

export default SoftwareCard