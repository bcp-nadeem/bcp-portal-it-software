import { Box, Card, FormControl, FormGroup } from "@mui/material";
import InputTypes from "../componenets/minor/InputTypes";
import PrimaryButton from "../componenets/minor/PrimaryButton";
import { useAuth } from "../store/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const loginFormStyle = {
    padding: "25px",
    width: "450px",
  };

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const { login } = useAuth();

  const navigate = useNavigate();

  const loginHandler = async() => {
    const result = await login(userData);
    console.log(result);
    
    if(result){
      navigate('/dashboard')
    }
  };

  return (
    <div className="login-form-style">
      <Box>
        <Card style={loginFormStyle}>
          <div className="mb-15">
            <h3>LOGIN</h3>
          </div>
          <FormGroup className="login-form-group">
            <FormControl variant="standard">
              <InputTypes
                className="mb-15"
                value={userData.email}
                setValue={setUserData}
                id="standard-basic"
                label="Email"
                variant="standard"
              />
            </FormControl>
            <FormControl variant="standard">
              <InputTypes
                className="mb-15"
                value={userData.password}
                setValue={setUserData}
                id="standard-basic"
                label="Password"
                variant="standard"
                type="password"
              />
            </FormControl>
            <FormControl variant="standard">
              <PrimaryButton
                variant="contained"
                onClickHander={loginHandler}
                className="mt-20"
                title="Login"
              />
            </FormControl>
          </FormGroup>
        </Card>
      </Box>
    </div>
  );
};

export default LoginPage;
