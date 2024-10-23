import PrimaryButton from "../componenets/minor/PrimaryButton.jsx";
import UploadButton from "../componenets/minor/UploadButton.jsx";
import Cards from "../componenets/minor/Cards.jsx";
import useSoftware from "../hooks/useSoftware.js";
import SearchBar from "../componenets/minor/SearchBar.jsx";

import BreadcrumbsBasic from "../componenets/minor/BreadcrumbsBasic.jsx";
import UserAvatar from "../componenets/minor/UserAvatar.jsx";
import BasicChips from "../componenets/minor/BasicChips.jsx";
import Dividers from "../componenets/minor/Dividers.jsx";
import { TextField } from "@mui/material";
import Labels from "../componenets/minor/Labels.jsx";
import Dropdowns from "../componenets/minor/Dropdowns.jsx";
import Image from "../componenets/minor/Image.jsx";


const Home = () => {
    const {handleClick} = useSoftware();
  return (
    <div>
      <PrimaryButton variant="contained" title="click me" onClickHander={handleClick} className="primary-btn" />
      <UploadButton title="Upload file" className=""></UploadButton>
      <Cards variant="" CardActions="" CardTitle="Testing" CardContent="" CardMedia="" CardButton="" ></Cards>
      <SearchBar variant="filled" title="Search..." className=""></SearchBar>
      <BreadcrumbsBasic></BreadcrumbsBasic>
      <UserAvatar alt="Avatar" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="" ></UserAvatar>
      <BasicChips label="Chip Outlined" variant="outlined" size="small"></BasicChips>
      <Dividers variant="" component="" orientation=""></Dividers>
      <TextField id="standard-basic" className="standard-basic" type="text" label="Standard" variant="standard" placeholder="Enter Here"></TextField>
      <Labels title="Employee"></Labels>
      <Dropdowns id="" className="" value="" onChange="" title=""></Dropdowns>
      <Image src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" id="" className="img-md" />
    </div>
  )
}

export default Home
