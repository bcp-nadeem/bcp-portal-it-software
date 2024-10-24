import { MdKeyboardArrowRight } from "react-icons/md"
import Tables from "../componenets/major/Tables"
import AddSoftwareModel from "../componenets/major/AddSoftwareModel"

const SoftwareList = () => {
  return (
    <>
     <section className='main-content-section'>
        <div className="main-topic-headign ">
            <h3>Dashboard  <MdKeyboardArrowRight /><span>Software List</span></h3>
        <AddSoftwareModel></AddSoftwareModel>
        </div>

        <section className="mt-50 table-pro-style">
            <Tables></Tables>
        </section>
    </section>
    </>
  )
}

export default SoftwareList