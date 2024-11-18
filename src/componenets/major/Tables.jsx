import { Link } from "react-router-dom";
import Heading from "../minor/Heading";
import UserAvatar from "../minor/UserAvatar";
import useSoftware from "../../hooks/useSoftware";
import DeleteModel from "./DeleteModel";
import AddVersionModel from "./AddVersionModel";
import EditSoftwareModel from "./EditSoftwareModel";
import { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import BasicChips from "../minor/BasicChips";
import { IoIosArrowDown } from "react-icons/io";
import EditVersioneModel from "./EditVersionModel";


const Tables = ({ data: software, fetchSoftware }) => {
  const { isLoading, error, deleteSoftware } = useSoftware();
  console.log(software);
  
  const [open, setOpen] = useState(null);
  const handleDeleteSoftware = async (id) => {
    try {
      await deleteSoftware(id);
      fetchSoftware();
    } catch (e) {
      console.error("Error deleting software:", e);
    }
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-center align-center p-4">
        Loading...
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

  if(!isLoading && !error)return (
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
        {software?.map((item) => (<>
          <tr key={item._id}>
            <td>
              <Link to={`/software-details/${item._id}`} className="d-flex d-flex-align-center gap-10">
                <UserAvatar
                  src={`${item.imageUrl}`}
                />
                <Heading heading={item.name} className="fs-16" />
              </Link>
            </td>
            <td>{item?.category?.name}</td>
            <td>{item?.seats}</td>
            <td>
            
              {item?.version?.map((version, index) => (
                <span key={version._id}>
                  <BasicChips label={version.name}></BasicChips>
                  {index < item.version.length - 1 ? " " : ""}
                </span>
              ))}
            </td>
            <td>
              <div className="d-flex cj-left gap-10">
                <AddVersionModel
                  parent={item}
                  onSuccess={fetchSoftware}
                />
                <EditSoftwareModel
                  data={item}
                  onSuccess={fetchSoftware}
                />
                <DeleteModel
                  id={item._id}
                  handleDelete={() => handleDeleteSoftware(item._id)}
                  onSuccess={fetchSoftware}
                />
              </div>

            </td>
            <td >
              <div onClick={()=>setOpen(prev=>prev!==null && prev===item._id ? null : item._id)}>

                <Button><IoIosArrowDown /></Button>

              </div>
            </td>
          </tr>


          {
            open===item._id && item?.version?.length>0 && (
              <tr >
                <th>Version</th>
                <th>Status</th>
                <th>install url</th>
                <th>download url</th>
                <th>Action</th>
              </tr>
            )
          }
      

          {
              open===item._id &&item?.version?.map((version) => (
                <tr key={version._id}>
                  <td>{version?.name}</td>
                  <td>Active</td>
                  <td>{version?.installUrl?"yes" : "no"}</td>
                  <td>{version?.downloadUrl?"yes" : "no"}</td>
                  <td className="d-flex gap-10">
                    <EditVersioneModel></EditVersioneModel>
                    <DeleteModel></DeleteModel>
                  </td>
                </tr>
              ))
            }

          
          </>
        ))}
      </tbody>
    </table>
  );
};

export default Tables;