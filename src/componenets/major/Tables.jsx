import { Link } from "react-router-dom";
import Heading from "../minor/Heading";
import UserAvatar from "../minor/UserAvatar";
import useSoftware from "../../hooks/useSoftware";
import DeleteModel from "./DeleteModel";
import AddVersionModel from "./AddVersionModel";
import EditSoftwareModel from "./EditSoftwareModel";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import BasicChips from "../minor/BasicChips";

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
              D

              </div>
            </td>
          </tr>

          <table>
            <thead>
          {
            open===item._id && item?.version?.length>0 && (
              <tr>
                <th colSpan={5}>
                  <td>
                    name
                  </td>
                  <td>
                    users
                  </td>
                  <td>
                    status
                  </td>
                  <td>
                    install url
                  </td>
                  <td>
                    download url
                  </td>
                  <td>
                    options
                  </td>
                </th>
              </tr>
            )
          }
          </thead>
          <tbody>
            {
               open===item._id &&item?.version?.map((version) => (
                <tr key={version._id}>
                  <td>{version?.name}</td>
                  <td>{version?.users?.lenght>0 ? version?.users?.length : 0}</td>
                  <td>{version?.status}</td>
                  <td>{version?.installUrl?"yes" : "no"}</td>
                  <td>{version?.downloadUrl?"yes" : "no"}</td>
                  <td>

                  </td>
                </tr>
              ))
            }
            </tbody>
            </table>
          
          </>
        ))}
      </tbody>
    </table>
  );
};

export default Tables;