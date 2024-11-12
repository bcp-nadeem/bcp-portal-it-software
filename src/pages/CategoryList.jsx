import { MdKeyboardArrowRight } from "react-icons/md"
import CategoryTable from "../componenets/major/CategoryTable"
import AddCategoryModel from "../componenets/major/AddCategoryModel"
import useCategory from "../hooks/useCategory"
import { useEffect } from "react"

const CategoryList = () => {
  const {category, fetchCategory} = useCategory()
  useEffect(() => {
    fetchCategory()
  },[fetchCategory])
  return (
    <>
    <section className='main-content-section'>
        <div className="main-topic-headign">
            <h3>Dashboard  <MdKeyboardArrowRight /><span>Category List</span></h3>
        </div>
        <div className="d-flex cj-right">
          <AddCategoryModel onSuccess={fetchCategory}></AddCategoryModel>
        </div>
        <section className="mt-50 table-pro-style">
            <CategoryTable data={category} fetchCategory={fetchCategory}></CategoryTable>
        </section>
    </section>
    </>
  )
}

export default CategoryList