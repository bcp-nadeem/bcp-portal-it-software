import { Link } from "react-router-dom";
import BasicChips from "../minor/BasicChips";
import Heading from "../minor/Heading";
import DeleteModel from "./DeleteModel";
import useCategory from "../../hooks/useCategory";
import { useEffect, useCallback } from "react";

const CategoryTable = () => {
  const { category, fetchCategory, deleteCategory } = useCategory();

  const fetchCategoryData = useCallback(() => {
    fetchCategory();
  }, [fetchCategory]);

  useEffect(() => {
    fetchCategoryData();
  }, [fetchCategoryData]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {category.length > 0 &&
            category.map((cat) => (
              <tr key={cat._id}>
                <td>
                  <Link to="/" className="d-flex d-flex-align-center gap-10">
                    <Heading heading={cat.name} className="fs-16"></Heading>
                  </Link>
                </td>
                <td>
                  <BasicChips label={cat.status}></BasicChips>
                </td>
                <td>
                  <div className="d-flex cj-left">
                    <DeleteModel
                      handleDelete={() => deleteCategory(cat._id)}
                      onSuccess={fetchCategoryData}
                    ></DeleteModel>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default CategoryTable;