import { MdKeyboardArrowRight } from "react-icons/md"
import CategoryTable from "../componenets/major/CategoryTable"
import AddCategoryModel from "../componenets/major/AddCategoryModel"

const CategoryList = () => {
  return (
    <>
    <section className='main-content-section'>
        <div className="main-topic-headign">
            <h3>Dashboard  <MdKeyboardArrowRight /><span>Category List</span></h3>
        </div>
        <div className="d-flex cj-right">
          <AddCategoryModel></AddCategoryModel>
        </div>
        <section className="mt-50 table-pro-style">
            <CategoryTable></CategoryTable>
        </section>
    </section>
    </>
  )
}

export default CategoryList