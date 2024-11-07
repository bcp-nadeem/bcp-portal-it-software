import { Link } from "react-router-dom"
import BasicChips from "../minor/BasicChips"
import Heading from "../minor/Heading"
import CategoryOption from "./CategoryOption"
import DeleteModel from "./DeleteModel"
import useCategory from "../../hooks/useCategory"
import { useEffect } from "react"

const CategoryTable = () => {
    const { category, fetchCategory  } = useCategory();
    useEffect(() => {
        fetchCategory();
    },[])

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
        {
            category && category.length>0 && category?.map((cat) => {
                return (
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
                            <DeleteModel></DeleteModel>
                        </div>
                    </td>
                </tr>)
            })
        }
       
    </table>
    </>
  )
}

export default CategoryTable