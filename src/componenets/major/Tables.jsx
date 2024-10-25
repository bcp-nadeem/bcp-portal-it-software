import { Link } from "react-router-dom"
import BasicChips from "../minor/BasicChips"
import Heading from "../minor/Heading"
import UserAvatar from "../minor/UserAvatar"
import Options from "./Options"
import useSoftware from "../../hooks/useSoftware"
import DeleteModel from "./DeleteModel"
import AddVersionModel from "./AddVersionModel"
import EditSoftwareModel from "./EditSoftwareModel"


const Tables = () => {
    const {software, deleteSoftware} = useSoftware()
    console.log(software);
    
  return (
    <>

    <table>
        <thead>
            <tr>
                <th>Software</th>
                <th>Category</th>
                <th>Version</th>
                <th>Action</th>
            </tr>
        </thead>
        {
            software && software.length>0 && software.map((item)=>(
                <tr key={item._id}>
            <td>
                <Link to="/" className="d-flex d-flex-align-center gap-10">
                    <UserAvatar /> <Heading heading={item.name} className="fs-16"></Heading>
                </Link>
            </td>
            <td>{item.category.name}</td>
            <td>{item.version && item.version.length>0 && item.version.map((version)=>(version.name))}</td>
            <td>
                <div className="d-flex cj-left gap-10">
                    <AddVersionModel></AddVersionModel>
                    <EditSoftwareModel></EditSoftwareModel>
                    <DeleteModel handleDelete={()=>deleteSoftware(item._id)}></DeleteModel>
                </div>
            </td>
        </tr>
            ))
        }
        
    </table>
    </>
  )
}

export default Tables