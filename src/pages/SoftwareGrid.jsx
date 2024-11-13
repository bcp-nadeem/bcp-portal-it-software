import { MdKeyboardArrowRight } from "react-icons/md"
import SoftwareCard from "../componenets/major/SoftwareCard"
import SoftwareImg from "../assets/images/software/software-img.png"
import useSoftware from "../hooks/useSoftware";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SoftwareGrid = () => {
    const {software, fetchSoftware} = useSoftware()
    useEffect(() => {
        fetchSoftware();
        console.log("software grid",software);
    },[])
    
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
                <div className="software-grids">
                    {
                        software && software.length>0 && software.map((item)=>(
                            <SoftwareCard key={item._id} id={item._id} src={`${item?.imageUrl}`} title={item.name} category={item.category.name} 
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