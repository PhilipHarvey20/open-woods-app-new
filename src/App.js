import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css'; // Import your custom CSS file for styling
import HomePage from './pages/HomePage';

function App() {
  return ( 
    <BrowserRouter>
      <div className="App">
        <div className="navbar" expand="lg" >
            <img
              src={process.env.PUBLIC_URL + "/images/OpenWoods_Logo.svg"}
              className="logo"
              alt="Your Logo"
            />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home" className=".nav-link_style">Home</Nav.Link>
              <Nav.Link href="#about" className="nav-link">About</Nav.Link>
              <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
