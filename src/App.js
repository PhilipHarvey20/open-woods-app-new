import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css"; // Import your custom CSS file for styling
import HomePage from "./pages/HomePage";
import AntlerScoringTool from "./pages/AntlerScoringPage"; // Ensure this path is correct

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar className="navbar" expand="lg">
          <Navbar.Brand href="#home" className="logo-container">
            <img
              src={process.env.PUBLIC_URL + "/images/ow_logo_new-cropped.svg"}
              className="logo"
              alt="Your Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" className=".nav-link_style">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/buck-scoring" className="nav-link">
                Buck Scoring
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buck-scoring" element={<AntlerScoringTool />} />{" "}
          {/* Updated path */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
