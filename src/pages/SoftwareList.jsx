import { MdKeyboardArrowRight } from "react-icons/md"
import Tables from "../componenets/major/Tables"
import AddSoftwareModel from "../componenets/major/AddSoftwareModel"
import useSoftware from "../hooks/useSoftware"
import { useEffect } from "react"

const SoftwareList = () => {
  const {software, fetchSoftware} = useSoftware()

  useEffect(() => {
    fetchSoftware()
  },[])
  return (
    <>
     <section className='main-content-section'>
        <div className="main-topic-headign ">
            <h3>Dashboard  <MdKeyboardArrowRight /><span>Software List</span></h3>
        </div>

        <div className="d-flex cj-right">
          <AddSoftwareModel onSuccess={fetchSoftware} ></AddSoftwareModel>
        </div>

        <section className="mt-50 table-pro-style">
            <Tables data ={software} fetchSoftware={fetchSoftware}></Tables>
        </section>
    </section>
    </>
  )
}

export default SoftwareList