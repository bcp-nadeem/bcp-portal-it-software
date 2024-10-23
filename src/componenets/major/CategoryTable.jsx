import { Link } from "react-router-dom"
import BasicChips from "../minor/BasicChips"
import Heading from "../minor/Heading"
import CategoryOption from "./CategoryOption"

const CategoryTable = () => {
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
        <tr>
            <td>
                <Link to="/" className="d-flex d-flex-align-center gap-10">
                   <Heading heading="Autocad" className="fs-16"></Heading>
                </Link>
            </td>
            <td>
                <BasicChips label="Active"></BasicChips>
            </td>
            <td>
                <CategoryOption />
            </td>
        </tr>
    </table>
    </>
  )
}

export default CategoryTable