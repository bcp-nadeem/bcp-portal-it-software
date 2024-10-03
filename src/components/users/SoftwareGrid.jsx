import { MdKeyboardArrowRight } from "react-icons/md"
import bgImageFromMiddle from '../../assets/images/bg/bg-mid-section.png'
import SoftwareImg from '../../assets/images/software/software-img.png'
import { useState } from "react";
import { Link } from "react-router-dom";


const SoftwareGrid = () => {

    const [isOpenSoftwareInfo, setIsOpenSoftwareInfo] = useState(false); 


  return (
    <>
     <main>
        <div className='bgImageFromMiddleTop' style={{ backgroundImage: `url(${bgImageFromMiddle})` }}></div>
          <section className="main-section-mid" >
            <section className='main-content-section'>
                <div className="main-topic-headign">
                  <h3>Dashboard  <MdKeyboardArrowRight /> <span>Softwares</span></h3>
                </div>

                <section className='searchbar-softwarelist-top-cover'>
                    <div className='searchbar-softwarelist'>
                        <input type="search" name='' id='' placeholder='Search...' />
                    </div>
                </section>


                <section className="software-grid-main">
                    <div className="software-grid-cover">
                        <div className="software-grid-title">
                            <h3>Software</h3>
                        </div>

                        <section className="software-grids">

                            <div className="software-grid" onClick={() => setIsOpenSoftwareInfo(!isOpenSoftwareInfo)}>
                                <div className="software-grid-img">
                                    <img src={SoftwareImg} alt="" />
                                </div>
                                <div className="software-grid-head">
                                    <h3>AutoCAD</h3>
                                </div>
                                <div className="software-grid-category">
                                    <label htmlFor="">Autodesk</label>
                                </div>
                                <div className="software-grid-description">
                                    AutoCAD - Design every detail: Accelerate 2D and 3D design documentationwith new and enhance...
                                </div>
                                <div className="software-grid-tags">
                                    <span>2024</span> <span>Win 64</span> <span>Mac</span>
                                </div>
                                <div className="software-grid-install-btn">
                                    <button>Install</button>
                                </div>
                            </div>
                            <div className="software-grid">
                                <div className="software-grid-img">
                                    <img src={SoftwareImg} alt="" />
                                </div>
                                <div className="software-grid-head">
                                    <h3>AutoCAD</h3>
                                </div>
                                <div className="software-grid-category">
                                    <label htmlFor="">Autodesk</label>
                                </div>
                                <div className="software-grid-description">
                                    AutoCAD - Design every detail: Accelerate 2D and 3D design documentationwith new and enhance...
                                </div>
                                <div className="software-grid-tags">
                                    <span>2024</span> <span>Win 64</span> <span>Mac</span>
                                </div>
                                <div className="software-grid-install-btn">
                                    <button>Install</button>
                                </div>
                            </div>
                            <div className="software-grid">
                                <div className="software-grid-img">
                                    <img src={SoftwareImg} alt="" />
                                </div>
                                <div className="software-grid-head">
                                    <h3>AutoCAD</h3>
                                </div>
                                <div className="software-grid-category">
                                    <label htmlFor="">Autodesk</label>
                                </div>
                                <div className="software-grid-description">
                                    AutoCAD - Design every detail: Accelerate 2D and 3D design documentationwith new and enhance...
                                </div>
                                <div className="software-grid-tags">
                                    <span>2024</span> <span>Win 64</span> <span>Mac</span>
                                </div>
                                <div className="software-grid-install-btn">
                                    <button>Install</button>
                                </div>
                            </div>
                            <div className="software-grid">
                                <div className="software-grid-img">
                                    <img src={SoftwareImg} alt="" />
                                </div>
                                <div className="software-grid-head">
                                    <h3>AutoCAD</h3>
                                </div>
                                <div className="software-grid-category">
                                    <label htmlFor="">Autodesk</label>
                                </div>
                                <div className="software-grid-description">
                                    AutoCAD - Design every detail: Accelerate 2D and 3D design documentationwith new and enhance...
                                </div>
                                <div className="software-grid-tags">
                                    <span>2024</span> <span>Win 64</span> <span>Mac</span>
                                </div>
                                <div className="software-grid-install-btn">
                                    <button>Install</button>
                                </div>
                            </div>
                            <div className="software-grid">
                                <div className="software-grid-img">
                                    <img src={SoftwareImg} alt="" />
                                </div>
                                <div className="software-grid-head">
                                    <h3>AutoCAD</h3>
                                </div>
                                <div className="software-grid-category">
                                    <label htmlFor="">Autodesk</label>
                                </div>
                                <div className="software-grid-description">
                                    AutoCAD - Design every detail: Accelerate 2D and 3D design documentationwith new and enhance...
                                </div>
                                <div className="software-grid-tags">
                                    <span>2024</span> <span>Win 64</span> <span>Mac</span>
                                </div>
                                <div className="software-grid-install-btn">
                                    <button>Install</button>
                                </div>
                            </div>

                            
                        </section>


                        {isOpenSoftwareInfo ? 
                            <section className="software-quiek-info-main">
                                <div className="software-quiek-info-cover">
                                    <div className="software-quiek-info-head">
                                        <img src={SoftwareImg} alt="" />
                                        <h3>AutoCAD</h3>
                                        <label htmlFor="">Autodesk</label> 
                                    </div>

                                    <div className="software-quiek-info-mid">
                                        <div className="software-quiek-info-details">
                                            <div className="software-quiek-info-first">
                                                <label htmlFor="">Information :</label>
                                                <ul>
                                                    <li>AutoCAD 2024, improved performance for users.</li>
                                                    <li>Uses the DWG file format, ensuring compatibility with other CAD applications.</li>
                                                    <li>Available for both Windows and macOS, with mobile and web versions for on-the-go access.</li>
                                                </ul>
                                            </div>
                                            <div className="software-quiek-info-second">
                                                <label htmlFor="">System Requirements :</label>
                                                <ul>
                                                    <li>Operating System : Windows 10 (64-bit) or later, macOS 11.0 (Big Sur) and later.</li>
                                                    <li>Processor : Minimum 2.5 GHz or faster, recommended 3+ GHz for optimal performance.</li>
                                                    <li>Memory (RAM) : At least 8 GB required, 16 GB or more recommended for better efficiency.</li>
                                                    <li>Disk Space : Requires 7 GB of free disk space for installation and operation.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="software-quiek-info-bottom">
                                        <div className="software-quiek-info-btns">
                                            <button className="software-quiek-info-btns-download">Download</button>
                                            <Link to="/software-details-page/1"><button className="software-quiek-info-btn-moreinfo">More info</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        : 
                        ""}
                       
                    </div>
                    
                </section>
          
            </section>
          </section>

        <div className='bgImageFromMiddleButtom bgImageFromMiddleButtom-left' style={{ backgroundImage: `url(${bgImageFromMiddle})` }}></div>
      </main>
    </>
  )
}

export default SoftwareGrid