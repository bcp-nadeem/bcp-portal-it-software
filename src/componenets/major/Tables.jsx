import { Link } from "react-router-dom"
import BasicChips from "../minor/BasicChips"
import Heading from "../minor/Heading"
import UserAvatar from "../minor/UserAvatar"
import Options from "./Options"
import useSoftware from "../../hooks/useSoftware"

const Tables = () => {
    const {software} = useSoftware()
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
            <td>{item.version && item.version.length>0 && item.versions.map((version)=>(version.name))}</td>
            <td>
                <Options />
            </td>
        </tr>
            ))
        }
        
    </table>
    </>
  )
}

export default Tables