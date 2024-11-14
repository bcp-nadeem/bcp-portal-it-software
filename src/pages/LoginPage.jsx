import React, { useState } from 'react';
import { Box, Card, FormControl, FormGroup } from "@mui/material";
import InputTypes from "../componenets/minor/InputTypes";
import PrimaryButton from "../componenets/minor/PrimaryButton";
import { useAuth } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import PositiveAlert from "../componenets/minor/PositiveAlert";
import NegativeAlert from "../componenets/minor/NegativeAlert";

const LoginPage = () => {

  const loginFormStyle = {
    padding: "25px",
    width: "450px",
  };

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const [alert, setAlert] = useState(null);

  const { login, isLoading } = useAuth();

  const navigate = useNavigate();

  const loginHandler = async() => {
    const result = await login(userData);
    console.log(result);
    
    if(result){
      setAlert({ type: 'success', message: 'Logged in successfully!' });
      navigate('/dashboard');
    } else {
      setAlert({ type: 'error', message: 'Failed to log in. Please try again.' });
    }
  };

  return (
    <div className="login-form-style">
      <Box>
        {isLoading ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <CircularProgress />
            <p style={{ marginLeft: '10px' }}>Hang tight, we're logging you in...</p>
          </div>
        ) : (
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
                  onClickHandler={loginHandler}
                  className="mt-20"
                  title="Login"
                />
              </FormControl>
            </FormGroup>
          </Card>
        )}
        {alert && (
          alert.type === 'success' ? (
            <PositiveAlert message={alert.message} />
          ) : (
            <NegativeAlert message={alert.message} />
          )
        )}
      </Box>
    </div>
  );
};

export default LoginPage;
