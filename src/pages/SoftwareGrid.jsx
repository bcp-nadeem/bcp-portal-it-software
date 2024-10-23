import { MdKeyboardArrowRight } from "react-icons/md"
import SoftwareCard from "../componenets/major/SoftwareCard"
import SoftwareImg from "../assets/images/software/software-img.png"

const SoftwareGrid = () => {
  return (
    <>
    <section className='main-content-section'>
        <div className="main-topic-headign">
            <h3>Dashboard  <MdKeyboardArrowRight /> <span>Softwares</span></h3>
        </div>

        <section className="software-grid-main">
            <div className="software-grid-cover">
                <div className="software-grid-title">
                    <h3>Software</h3>
                </div>
                <div >
                    <SoftwareCard src={SoftwareImg} title="AutoCAD" category="Autodesk" description="AutoCAD - Design every detail: Accelerate 2D and 3D design documentationwith new and enhance..." version="2024"></SoftwareCard>
                </div>
            </div>
        </section>
    </section>

    

    </>
  )
}

export default SoftwareGrid