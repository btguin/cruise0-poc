import React from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  // Define the logout function with hard-coded redirect URL
  const handleLogout = () => {
    logout({ returnTo: 'https://cruise0-poc.vercel.app' }); 
  };

  return (
    <div className="App">
      <header className="App-header">
        {!isAuthenticated ? (
          <button onClick={() => loginWithRedirect()}>Log In</button>
        ) : (
          <>
            <button onClick={handleLogout}>Log Out</button> {/* Use the handleLogout function */}
            <div>
              <img src={user.picture} alt={user.name} />
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
            </div>
          </>
        )}
      </header>
    </div>
  );
};

export default App;
