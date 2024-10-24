import { MdKeyboardArrowRight } from "react-icons/md"
import SoftwareCard from "../componenets/major/SoftwareCard"
import SoftwareImg from "../assets/images/software/software-img.png"
import useSoftware from "../hooks/useSoftware";

const SoftwareGrid = () => {
    const {software} = useSoftware()
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
                    {
                        software && software.length>0 && software.map((item)=>(
                            <SoftwareCard key={item._id} src={SoftwareImg} title={item.name} category={item.category.name} 
                            description={item.information} version={item.version}></SoftwareCard>
                        ))
                    }
                </div>
            </div>
        </section>
    </section>

    

    </>
  )
}

export default SoftwareGrid