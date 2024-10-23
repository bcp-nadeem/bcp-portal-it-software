import Breadcrumbs from '@mui/material/Breadcrumbs';

const BreadcrumbsBasic = ({handleClick, LinkRoute, LinkName}) => {
  return (
    <div role="presentation" onClick={handleClick}>
    <Breadcrumbs aria-label="breadcrumb">
      
    </Breadcrumbs>
  </div>
  )
}

export default BreadcrumbsBasic