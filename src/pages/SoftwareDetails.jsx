import { MdKeyboardArrowRight } from "react-icons/md";
import SoftwareImg from "../assets/images/software/software-img.png"
import { BiStats } from "react-icons/bi";
import { FiCpu } from "react-icons/fi";
import { FiGitMerge } from "react-icons/fi";
import InfoCards from "../componenets/minor/InfoCards";
import { Button } from "@mui/material";

const SoftwareDetails = () => {
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
                        <img src={SoftwareImg} alt="" />
                        <div className='software-details-info-title'>
                            <h3>AutoCAD</h3>
                            <label htmlFor="">Autodesk</label>
                        </div>
                    </div>
                    <div className='software-details-info-button'>
                        <Button>Download</Button>
                    </div>
                </div>
            </section>
            <section className='software-details-mid'>
                <div className='software-details-boxes-indetails-page'> 
                   <InfoCards Icons={<BiStats />} Numbers="01" text="Seats"></InfoCards>
                   <InfoCards Icons={<FiCpu />} Numbers="02" text="Version"></InfoCards>
                   <InfoCards Icons={<FiGitMerge />} Numbers="03" text="Category"></InfoCards>
                </div>
            </section>
            <section className='software-details-down'>
              <div className='software-info-cover'>
                  <h3>Information : </h3>
                  <ul>
                    <li>AutoCAD 2024, improved performance for users.</li>
                    <li>Uses the DWG file format, ensuring compatibility with other CAD applications.</li>
                    <li>Available for both Windows and macOS, with mobile and web versions for on-the-go access.</li>
                  </ul>
              </div>
              <div className='software-info-cover'>
                  <h3>System Requirements :</h3>
                  <ul>
                    <li>Operating System : Windows 10 (64-bit) or later, macOS 11.0 (Big Sur) and later.</li>
                    <li>Processor : Minimum 2.5 GHz or faster, recommended 3+ GHz for optimal performance.</li>
                    <li>Memory (RAM) : At least 8 GB required, 16 GB or more recommended for better efficiency.</li>
                  </ul>
              </div>
            </section>
        </section>
      </section>
    </>
  )
}

export default SoftwareDetails