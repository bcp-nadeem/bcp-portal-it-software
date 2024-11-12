import { FormControl, FormGroup, Paper } from "@mui/material"
import InputTypes from "../minor/InputTypes"
import StatusDropdown from "./StatusDropDown"
import PrimaryButton from "../minor/PrimaryButton"
import UserDropDown from "./UserDropDown"
import CategoryDropdown from "./CategoryDropdown"
import UserMultiSelect from "./UserMultiSelect"


const EmailNotificationForm = () => {
  return (
    <>
            <Paper className='mt-20' elevation={0}>
                <FormGroup className='d-flex model-from-style'>
                    <FormControl className='from-controll'>
                        <UserMultiSelect title="Select User" />
                    </FormControl>
                    <FormControl className='from-controll'>
                        <CategoryDropdown id="" className="margin-none" title="Select Software" />
                    </FormControl>
                    <FormControl className='from-controll'>
                        <InputTypes id="standard-basic" label="Enter Subject" className="" type="text" labe="Standard" variant="standard" placeholder="Enter Subject" />
                    </FormControl>
                    <FormControl className='from-controll'>
                        
                    </FormControl>
                    <FormControl className='from-controll d-flex text-center ai-center cj-center mt-30'>
                    <PrimaryButton variant="contained" title="Submit" size="medium" onClickHander="" className="btn-ws-100"></PrimaryButton>
                    </FormControl>
                </FormGroup>
            </Paper>
    </>
  )
}

export default EmailNotificationForm