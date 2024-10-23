import { Box, Card, FormControl, FormGroup } from "@mui/material"
import InputTypes from "../componenets/minor/InputTypes"
import PrimaryButton from "../componenets/minor/PrimaryButton"

const LoginPage = () => {

  const loginFormStyle = {
    "padding" : "25px",
    "width" : "450px",
  }
  return (
    <>
      <div className="login-form-style">
          <Box>
            <Card style={loginFormStyle}>
              <div className="mb-15">
                <h3>LOGIN</h3>
              </div>
              <FormGroup className="login-form-group">
                <FormControl variant="standard">
                  <InputTypes className="mb-15" id="standard-basic" label="Username" variant="standard"></InputTypes>
                </FormControl>
                <FormControl variant="standard">
                  <InputTypes className="mb-15" id="standard-basic" label="Password" variant="standard"></InputTypes>
                </FormControl>
                <FormControl variant="standard">
                  <PrimaryButton variant="contained" onClick="" className="mt-20" title="Login"></PrimaryButton>
                </FormControl>
              </FormGroup>
            </Card>
          </Box>
      </div>
    </>
  )
}

export default LoginPage