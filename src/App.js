// import React from 'react';
// import './App.css';
// import { useAuth0 } from '@auth0/auth0-react';

// const App = () => {
//   const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) return <div>Loading...</div>;

//   // Define the logout function with hard-coded redirect URL
//   const handleLogout = () => {
//     logout({ returnTo: 'https://cruise0-poc.vercel.app' }); 
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         {!isAuthenticated ? (
//           <button onClick={() => loginWithRedirect()}>Log In</button>
//         ) : (
//           <>
//             <button onClick={handleLogout}>Log Out</button> {/* Use the handleLogout function */}
//             <div>
//               <h2>{user.name}</h2>
//               <p>Email: {user.email}</p>
//             </div>
//           </>
//         )}
//       </header>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, CircularProgress, Container, Typography } from '@mui/material';

const App = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: 'https://cruise0-poc.vercel.app' }); // Replace with your actual Vercel URL
  };

  if (isLoading) return <Container><CircularProgress /></Container>;

  return (
    <Container style={{ textAlign: 'center', marginTop: '20px' }}>
      <header>
        {!isAuthenticated ? (
          <Button variant="contained" color="primary" onClick={() => loginWithRedirect()}>
            Log In
          </Button>
        ) : (
          <>
            <Button variant="contained" color="secondary" onClick={handleLogout}>
              Log Out
            </Button>
            <div style={{ marginTop: '20px' }}>
              <Typography variant="h5">{user.name}</Typography>
              <Typography variant="subtitle1">Email: {user.email}</Typography>
            </div>
          </>
        )}
      </header>
    </Container>
  );
};

export default App;

