import { Link } from "react-router-dom";
import Heading from "../minor/Heading";
import UserAvatar from "../minor/UserAvatar";
import useSoftware from "../../hooks/useSoftware";
import DeleteModel from "./DeleteModel";
import AddVersionModel from "./AddVersionModel";
import EditSoftwareModel from "./EditSoftwareModel";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";

const Tables = ({ data: software, fetchSoftware }) => {
  const { isLoading, error, deleteSoftware } = useSoftware();

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
                  {version.name}
                  {index < item.version.length - 1 ? ", " : ""}
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
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tables;