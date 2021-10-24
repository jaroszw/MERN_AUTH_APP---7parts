import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../context/MainContext';
import AuthServices from '../services/auth.service';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Dash = () => {
  const { jwt, setJwt } = useContext(MainContext);
  const [parsedData, setParsedData] = useState('');
  const history = useHistory();

  const logout = () => {
    AuthServices.logout();
    setJwt('');
    return history.push('/login');
  };

  useEffect(() => {
    try {
      return setParsedData(atob(jwt.split('.')[1]));
    } catch (error) {
      AuthServices.logout();
      setJwt('');
      return history.push('/');
    }
  }, [jwt, history, setJwt, setParsedData]);

  return (
    <Container component="main" maxWidth="xs">
      <p>{parsedData}</p>
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
