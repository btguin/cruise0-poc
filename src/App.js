import React, { useState, useEffect } from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, CircularProgress, Container, Typography, Alert } from '@mui/material';

const App = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const parseQueryParams = () => {
      const params = new URLSearchParams(window.location.search);
      const errorDescription = params.get('error_description');
      if (errorDescription) {
        setErrorMessage(errorDescription);
      }
    };
    parseQueryParams();
  }, []);

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleLogin = () => {
    loginWithRedirect();
  };

  // Updated function to handle sign up
  const handleSignUp = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  };

  if (isLoading) return <Container><CircularProgress /></Container>;

  return (
    <Container style={{ textAlign: 'center', marginTop: '20px' }}>
      <header>
        {errorMessage && (
          <Alert severity="error" style={{ marginBottom: '20px' }}>{errorMessage}</Alert>
        )}
        {!isAuthenticated ? (
          <>
            <Button variant="contained" color="primary" onClick={handleLogin} style={{ marginRight: '10px' }}>
              Log In
            </Button>
            <Button variant="contained" color="primary" onClick={handleSignUp}>
              Sign Up
            </Button>
          </>
        ) : (
          <>
            <Button variant="contained" color="secondary" onClick={handleLogout}>
              Log Out
            </Button>
            <div style={{ marginTop: '20px' }}>
              <Typography variant="h5">{user.name}</Typography>
              <Typography variant="subtitle1">Email: {user.email}</Typography>
              <Typography variant="subtitle2">User ID: {user.sub}</Typography>
            </div>
          </>
        )}
      </header>
    </Container>
  );
};

export default App;
