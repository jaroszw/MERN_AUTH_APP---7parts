import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../context/MainContext';
import AuthServices from '../services/auth.service';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Dash = () => {
  const { jwt, setJwt } = useContext(MainContext);
  const history = useHistory();

  const logout = () => {
    AuthServices.logout();
    setJwt('');
    return history.push('/login');
  };

  const data = JSON.parse(atob(jwt.split('.')[1]));
  // <pre>{JSON.stringify(JSON.parse(atob(jwt.split('.')[1])), null, 2)}</pre>

  return (
    <Container component="main" maxWidth="xs">
      <h1>Dash Page</h1>
      <p>ID: {data._id}</p>
      <p>USER NAME: {data.username}</p>
      <p>USER PASSWORD: {data.password}</p>
      <p>CREATED AT: {data.createdAt}</p>
      <p>UPDATED AT: {data.updatedAt}</p>
      <p>IAT: {data.iat}</p>
      <p>EXP: {data.exp}</p>
      <Button
        onClick={logout}
        color="secondary"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Log Out
      </Button>
    </Container>
  );
};

export default Dash;
