// eslint-disable-next-line arrow-body-style
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardAdmin from './components/DashboardAdmin.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import MyCompte from './components/MyCompte.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import CreationBook from './components/CreationBook.jsx';
import MyBooks from './components/MyBooks.jsx';
import Bookdetails from './components/Bookdetails.jsx';
import Bookpresentation from './components/Bookpresentation';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/moncompte" element={<MyCompte />} />
        <Route path="/creationbook" element={<CreationBook />} />
        <Route path="/mesbooks" element={<MyBooks />} />
        <Route path="/mesbooks/:id" element={<Bookdetails />} />
        <Route
          path="/mesbooks/presentation/:id"
          element={<Bookpresentation />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route path="/admin" element={<DashboardAdmin />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
