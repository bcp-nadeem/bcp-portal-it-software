import { Link } from "react-router-dom"
import BasicChips from "../minor/BasicChips"
import Heading from "../minor/Heading"
import UserAvatar from "../minor/UserAvatar"
import Options from "./Options"
import useSoftware from "../../hooks/useSoftware"
import DeleteModel from "./DeleteModel"
import AddVersionModel from "./AddVersionModel"
import EditSoftwareModel from "./EditSoftwareModel"
import { useEffect } from "react"
import { CircularProgress } from "@mui/material"


const Tables = () => {
    const { software, isLoading, error, fetchSoftware, deleteSoftware } = useSoftware();
  
    useEffect(() => {
      fetchSoftware();
    }, []);
  
    if (isLoading) {
      return (
        <div className="d-flex justify-center align-center p-4">
          <CircularProgress />
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="text-red-500 p-4">
          Error loading software: {error}
        </div>
      );
    }
  
    return (
      <table>
        <thead>
          <tr>
            <th>Software</th>
            <th>Category</th>
            <th>Seats</th>
            <th>Version</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {software?.map((item) => (
            <tr key={item._id}>
              <td>
                <Link to="/" className="d-flex d-flex-align-center gap-10">
                  <UserAvatar
                    src={`${import.meta.env.VITE_API_ASSET}/${item.imageUrl}`}
                  />
                  <Heading heading={item.name} className="fs-16" />
                </Link>
              </td>
              <td>{item?.category?.name}</td>
              <td>{item?.seats}</td>
              <td>
                {item?.version?.map((version, index) => (
                  <span key={version._id}>
                    {version.name}
                    {index < item.version.length - 1 ? ", " : ""}
                  </span>
                ))}
              </td>
              <td>
                <div className="d-flex cj-left gap-10">
                  <AddVersionModel softwareId={item._id} onSuccess={fetchSoftware} />
                  <EditSoftwareModel
                    data={item}
                    category={item.category}
                    onSuccess={fetchSoftware}
                  />
                  <DeleteModel
                    id={item._id}
                    handleDelete={() => deleteSoftware(item._id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Tables;
  