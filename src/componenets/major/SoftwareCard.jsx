import { Box, Button, Card } from "@mui/material"
import BasicChips from "../minor/BasicChips"
import { useState } from "react";
import SoftwareQuiekInfo from "./SoftwareQuiekInfo";
import QuillEditor from "./QuillEditor";

const SoftwareCard = ({id, src, title, category, description, version}) => {

    const [isOpenSoftwareInfo, setIsOpenSoftwareInfo] = useState(false); 
    const [selectedVersion, setSelectedVersion] = useState(version[0]);

  return (
    <>
            <Card className="software-grid">
                <div className="software-grid-img">
                    <img src={src} alt="" />
                </div>
                <div className="software-grid-head">
                    <h3>{title}</h3>
                </div>
                <div className="software-grid-category">
                    <label htmlFor="">{category}</label>
                </div>
                {/* <div className="software-grid-description">
                <QuillEditor description={description} />
                </div> */}
                <div className="software-grid-tags">
                    {
                        version && version.length>0 && version.map((item)=>(
                            <BasicChips onClick={() => setSelectedVersion(item)} key={item._id} label={item.name} size="small" ></BasicChips>
                        )) || <BasicChips label={"No version found"} size="small" ></BasicChips>
                    }
                </div>
                <div className="software-grid-install-btn">
                    {
                        selectedVersion &&  selectedVersion?.installUrl && <Button href={selectedVersion?.installUrl} >Install {selectedVersion.name}</Button>
                    }
                    {
                        selectedVersion &&  selectedVersion?.downloadUrl && <Button >Download {selectedVersion.name}</Button>
                    }
                    <Button onClick={() => setIsOpenSoftwareInfo(!isOpenSoftwareInfo)}>
                        {isOpenSoftwareInfo ? "Close" : "Quick Info"}
                    </Button>
                </div>
            </Card>
        {isOpenSoftwareInfo ? 
            
            <SoftwareQuiekInfo id={id} src={src} title={title} category={category} description={description} ></SoftwareQuiekInfo>
        : 
        ""}
    </>
  )
}

export default SoftwareCard