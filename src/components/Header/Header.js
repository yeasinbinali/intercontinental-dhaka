import React, { useContext } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../images/logo/logo.jpg";
import { AuthContext } from "../../UserContext/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch((error) => console.error(error))
  }
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <img className="logo" src={logo} alt="" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav">
              <Link to="/">Home</Link>
              <Link to="/books">Book</Link>
              {user?.email ? (
                <Button className='logout-btn' onClick={handleLogOut} variant="primary">Logout</Button>
              ) : (
                <>
                  <Link to="/signup">SignUp</Link>
                  <Link to="/login">Login</Link>
                </>
              )}
            </Nav>
            <span>
              <b>{user?.email}</b>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
