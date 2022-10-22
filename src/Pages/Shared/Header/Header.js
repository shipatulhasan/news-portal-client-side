import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../UseContext/AuthProvider";
import { FaTv, FaUser, FaUserCircle } from "react-icons/fa";
import LeftSideBar from "../LeftSideBar/LeftSideBar";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="mb-4"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-white fw-bold">NN.news</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
          <div className="d-lg-none">
            <LeftSideBar></LeftSideBar>
          </div>
          <Nav className="ms-auto">
            {user?.uid ? (
              <div className="d-flex align-items-center gap-2">
                
                  <Link to='/profile'>
                  {
                  user?.photoURL ? 
                  <Image
                    src={user?.photoURL}
                    style={{ width: "30px", height: "30px" }}
                    className="rounded-circle"
                  ></Image>
                 : 
                  
                    <FaUserCircle></FaUserCircle>
                  }
                  </Link>
                

                <Nav.Link onClick={handleLogOut} >Logout</Nav.Link>
              </div>
            ) : (
              <div className="d-lg-flex align-items-center gap-3 ">
                <Link to="/login" className="text-white">Login</Link>
                <Link to="/registration" className="text-white">Registration</Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
