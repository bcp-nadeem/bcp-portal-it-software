import { Box, Button, Card } from "@mui/material"
import BasicChips from "../minor/BasicChips"
import { useState } from "react";
import SoftwareQuiekInfo from "./SoftwareQuiekInfo";
import QuillEditor from "./QuillEditor";
import { Link } from "react-router-dom";

const SoftwareCard = ({id, src, title, category, description, version}) => {

    const [isOpenSoftwareInfo, setIsOpenSoftwareInfo] = useState(false); 
    const [selectedVersion, setSelectedVersion] = useState(version[0]);

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