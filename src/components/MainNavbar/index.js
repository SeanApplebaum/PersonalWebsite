import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

function MainNavbar(params) {
  let pathname = window.location.pathname;
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Link style={{ textDecoration: "none" }} to={pathname + "/about"}>
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
          <Nav.Link href={pathname + "/about"}>About Me</Nav.Link>
          <Nav.Link href={pathname + "/experience"}>
            Experience and Education
          </Nav.Link>
          <Nav.Link href={pathname + "/skills"}>Skills</Nav.Link>
          <Nav.Link href={pathname + "/projects"}>Projects</Nav.Link>
          <Nav.Link href={pathname + "/contact"}>Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavbar;
