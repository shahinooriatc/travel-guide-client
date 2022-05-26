import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../icons/logo.svg";
import "./HomeNav.css";
import firebase from "firebase/app";
import "firebase/auth";
import GlobalContext from "../../../context/GlobalContext";
import {
  isAdmin,
  setLoggedInUser,
  showLoggedOutToast,
} from "../../../context/actions";
import { toast } from "react-toastify";

const HomeNav = () => {
  const location = useLocation();

  const { state, dispatch } = useContext(GlobalContext);

  const notifyOnLogOut = () => toast("User successfully logged out");

  const handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(setLoggedInUser({}));
        dispatch(showLoggedOutToast());
        dispatch(isAdmin(false));
        notifyOnLogOut();
      })
      .catch((error) => {
        alert(error);
      });
  };

  const loggedInUser = state.loggedInUser?.name;
  const adminStatus = state.isAdmin;
  const img = state.loggedInUser.img;
  return (
    <Container>
      <Navbar bg="light" expand="lg"  sticky="top" >
        <Navbar.Brand as={Link} to="/">
          <h3 className="nav-logo">
            <img src={logo} className="nav-logo-svg" alt="logo" />
            Travel Guide
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 nav-toggle"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="nav-items">
          <Nav className="ml-auto nav-links">
            {location.pathname === "/" && (
              <>
                <Nav.Link href="#service">Services</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </>
            )}
            {adminStatus ? (
              <Nav.Link as={Link} to="/orderList">
                Admin panel
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/bookingList">
                Dashboard
              </Nav.Link>
            )}

            <Nav.Link as={Link} to="/review">
              Add a Review
            </Nav.Link>
            {loggedInUser ? (
              <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            {loggedInUser ? (
              <img
                src={img}
                alt="user"
                style={{ width: "40px", borderRadius: "50%" }}
                className="mx-2"
              />
            ) : (
              <span></span>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default HomeNav;
