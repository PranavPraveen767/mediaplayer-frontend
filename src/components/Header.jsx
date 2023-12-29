import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { HiVideoCamera } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar className="bg-success">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} style={{ color: "white", fontSize: "30px", textDecoration: "none" }}>
              {" "}
              <HiVideoCamera size={35} className="me-4" />Media Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
 