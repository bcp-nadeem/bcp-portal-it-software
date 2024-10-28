import { MdKeyboardArrowRight } from "react-icons/md";
import SoftwareImg from "../assets/images/software/software-img.png"
import { BiStats } from "react-icons/bi";
import { FiCpu } from "react-icons/fi";
import { FiGitMerge } from "react-icons/fi";
import InfoCards from "../componenets/minor/InfoCards";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useSoftware from "../hooks/useSoftware";
import QuillEditor from "../componenets/major/QuillEditor";

const SoftwareDetails = () => {
  const {softwareId} = useParams()
  const {getSoftwareById} = useSoftware()
  const [software,setSoftware] = useState({})

  useEffect(()=>{
    getSoftwareById(softwareId, setSoftware)
    console.log(software);
    
  },[softwareId])

  return (
    <>
      <section className='main-content-section'>
        <div className="main-topic-headign">
            <h3>Dashboard  <MdKeyboardArrowRight /> Software <MdKeyboardArrowRight /> <span>Software details</span></h3>
        </div>
        <section className='software-details-cover'>

            <section className='software-details-head'>
                <div className='software-details-head-info'>
                    <div className='software-details-info-img'>
                        <img src={`${import.meta.env.VITE_API_ASSET}/${software?.imageUrl}`} alt="" />
                        <div className='software-details-info-title'>
                            <h3>{software?.name}</h3>
                            <label htmlFor="">{software?.category?.name}</label>
                        </div>
                    </div>
                    <div className='software-details-info-button'>
                        <Button>Download</Button>
                    </div>
                </div>
            </section>
            <section className='software-details-mid'>
                <div className='software-details-boxes-indetails-page'> 
                   <InfoCards Icons={<BiStats />} Numbers={software?.seats} text="Seats"></InfoCards>
                   <InfoCards Icons={<FiCpu />} Numbers={software?.version?.length} text="Version"></InfoCards>
                   <InfoCards Icons={<FiGitMerge />} Numbers={software?.category?.name} text="Category"></InfoCards>
                </div>
            </section>
            <section className='software-details-down'>
              <div className='software-info-cover'>
                <QuillEditor description={software?.information} />
              </div>
            </section>
        </section>
      </section>
    </>
  )
}

export default SoftwareDetails