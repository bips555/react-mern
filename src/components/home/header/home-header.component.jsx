import { useState } from "react";
import { Container } from "react-bootstrap";
import { Nav, Navbar, Form, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const HomeHeader = () => {
  const [theme, settheme] = useState("dark");
  const themechange = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-success"
        bg={theme}
        data-bs-theme={theme}
      >
        <Container>
          <Navbar.Brand to="#home">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/link">Link</NavLink>
              <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavLink to="/category/electronics" className="dropdown-item"> 
             🔌 Electronics
             </NavLink>
 
                <NavLink to="/category/smart-phones" className="dropdown-item">
                 📱 Mobile Phones
                </NavLink>
                <NavLink to="/category/smart-phones" className="dropdown-item">
                  
                </NavLink>
              </NavDropdown>
            </Nav>
            <Nav className=" text-center justify-content-center">
              <NavLink>
                <Form>
                  <Form.Control
                    type="search"
                    size="sm"
                    placeholder="Enter to search.."
                  ></Form.Control>
                </Form>
              </NavLink>
              <NavLink className="nav-link" to="/register">Sign Up</NavLink>
              <NavLink className="nav-link" to="/login">Login</NavLink>
              <NavLink className="nav-link" to="/signup">Biplove Subedi</NavLink>
              <NavLink className="nav-link" to="/logout">Logout </NavLink>
              <NavLink className="nav-link" to="#">Cart(0)</NavLink>
              <NavLink>
                <button onClick={themechange}>Theme</button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HomeHeader;
