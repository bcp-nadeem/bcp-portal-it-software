import { Box, Button, Card } from "@mui/material"
import BasicChips from "../minor/BasicChips"
import { useState } from "react";
import SoftwareQuiekInfo from "./SoftwareQuiekInfo";

const SoftwareCard = ({src, title, category, description, version}) => {

    const [isOpenSoftwareInfo, setIsOpenSoftwareInfo] = useState(false); 

  return (
    <>
        <Box className="software-grids">
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
                <div className="software-grid-description">
                    {description}
                </div>
                <div className="software-grid-tags">
                    <BasicChips label={version} size="small" ></BasicChips>
                </div>
                <div className="software-grid-install-btn">
                    <Button>Install</Button>
                    <Button onClick={() => setIsOpenSoftwareInfo(!isOpenSoftwareInfo)}>
                        {isOpenSoftwareInfo ? "Close" : "Quick Info"}
                    </Button>
                </div>
            </Card>
        </Box>
        {isOpenSoftwareInfo ? 
            
            <SoftwareQuiekInfo src={src} title="AutoCAD" category="Autodesk" description="AutoCAD - Design every detail: Accelerate 2D and 3D design documentationwith new and enhance..." ></SoftwareQuiekInfo>
        : 
        ""}
    </>
  )
}

export default SoftwareCard