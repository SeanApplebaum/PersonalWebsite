import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

function MainNavbar(params) {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Link style={{ textDecoration: "none" }} href="about">
        <Navbar.Brand className="navbar-brand">
          <Image
            src={process.env.PUBLIC_URL + "/logo320.png"}
            width="50"
            height="50"
            alt="seanapplebaum"
            roundedCircle
          />
          <div className="navbar-text">Sean Applebaum</div>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="about">About Me</Nav.Link>
          <Nav.Link href="experience">Experience and Education</Nav.Link>
          <Nav.Link href="skills">Skills</Nav.Link>
          <Nav.Link href="projects">Projects</Nav.Link>
          <Nav.Link href="contacts">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavbar;
