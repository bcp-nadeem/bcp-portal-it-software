
import bgImageFromMiddle from '../../assets/images/bg/bg-mid-section.png'
import { useParams } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
import AvatarImg from '../../assets/images/software/software-img.png'
import { BiStats } from "react-icons/bi";
import { FiCpu } from "react-icons/fi";
import { FiGitMerge } from "react-icons/fi";



const SoftwareDetailPage = () => {
 const Params = useParams();
 console.log(Params)

  return (
    <>
      <main>
        <div className='bgImageFromMiddleTop' style={{ backgroundImage: `url(${bgImageFromMiddle})` }}></div>
          <section className="main-section-mid">
            <section className='main-content-section'>
            <div className="main-topic-headign">
                <h3>Dashboard  <MdKeyboardArrowRight /> Software <MdKeyboardArrowRight /> <span>Software details</span></h3>
            </div>


            <section className='software-details-cover'>

                <section className='software-details-head'>
                    <div className='software-details-head-info'>
                        <div className='software-details-info-img'>
                            <img src={AvatarImg} alt="" />
                            <div className='software-details-info-title'>
                                <h3>AutoCAD</h3>
                                <label htmlFor="">Autodesk</label>
                            </div>
                        </div>
                        <div className='software-details-info-button'>
                            <button>Download</button>
                        </div>
                    </div>
                </section>
                <section className='software-details-mid'>
                    <div className='software-details-boxes-indetails-page'> 
                        <div className='dashboard-grid-value-show'>
                          <div className='score-dash'><BiStats />&nbsp; <span>02</span></div>
                          <div className='score-title-dash'>Seats</div>
                        </div>
                        <div className='dashboard-grid-value-show'>
                          <div className='lg-icon'></div>
                          <div className='score-dash'><FiCpu />&nbsp; <span>02</span></div>
                          <div className='score-title-dash'>Version</div>
                        </div>
                        <div className='dashboard-grid-value-show'>
                          <div className='lg-icon'></div>
                          <div className='score-dash'><FiGitMerge />&nbsp; <span>02</span></div>
                          <div className='score-title-dash'>Category</div>
                        </div>
                    </div>
                </section>
                <section className='software-details-down'>
                  <div className='software-info-cover'>
                      <h3>Information :</h3>
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
          </section>
        <div className='bgImageFromMiddleButtom bgImageFromMiddleButtom-left' style={{ backgroundImage: `url(${bgImageFromMiddle})` }}></div>
      </main>
    </>
  )
}

export default SoftwareDetailPage