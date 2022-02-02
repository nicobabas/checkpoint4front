// eslint-disable-next-line arrow-body-style
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserContext from './contexts/BrandContext.js';
import DashboardAdmin from './components/DashboardAdmin.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import MyCompte from './components/MyCompte.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import CreationBook from './components/CreationBook.jsx';
import UserHome from './components/UserHome.jsx';

import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('http://localhost:8000/user/:?').then((response) => {
      setUser(response.data);
    });
  };

  return (
    <UserContext.Provider value={{ user: user }}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home/:?" element={<UserHome />} />
          <Route path="/moncompte" element={<MyCompte />} />
          <Route path="/creationbook" element={<CreationBook />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/admin" element={<ProtectedRoute />}>
            <Route path="/admin" element={<DashboardAdmin />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
};

export default App;
