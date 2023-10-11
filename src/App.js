import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Calender from './pages/Calender';
import Error from './pages/Error';
import CreateAccountForm from './pages/CreateAccount';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  const [userToken, setUserToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const handleStorageChange = () => {
      setUserToken(localStorage.getItem('token'));
    };

    const checkStoragePeriodically = () => {
      setUserToken(localStorage.getItem('token'));
    };
    // Event listener to listen for changes in token 
    window.addEventListener('storage', handleStorageChange);
    const intervalId = setInterval(checkStoragePeriodically, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(intervalId);
    };
  }, []);

  const authenticatedRoutes = (
    <>
      {/* Authenticated user routes */}
      <Route index element={<Home />} />
      <Route path="Calender" element={<Calender />} />
      <Route path="ProfilePage" element={<ProfilePage />} />
      {/* Add more routes for authenticated users */}
    </>
  );

  const unauthenticatedRoutes = (
    <>
      {/* Non-authenticated user routes */}
      <Route index element={<Home />} />
      <Route path="Calender" element={<LoginPage />} />
      <Route path="CreateAccount" element={<CreateAccountForm />} />
      <Route path="Login" element={<LoginPage />} />
    </>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* Include RootLayout in both authenticated and unauthenticated routes */}
          {userToken ? authenticatedRoutes : unauthenticatedRoutes}
        </Route>
        <Route path="*" element={<RootLayout />}>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
