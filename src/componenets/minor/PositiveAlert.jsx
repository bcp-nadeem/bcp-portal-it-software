import React from 'react';
import { Alert, AlertTitle } from '@mui/material';

const PositiveAlert = ({ message }) => {
  return (
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      {message}
    </Alert>
  );
};

export default PositiveAlert;
