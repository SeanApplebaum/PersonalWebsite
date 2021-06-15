import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";

import "./styles.scss";

function UnderConstruction(props) {
  return (
    <Jumbotron className="jumbotron-dark centered">
      <h1>This site is currently under construction!</h1>
      <Construction />
      <h6>
        If you wish to contact me, please send me an email at 2
        <a href="mailto: seanapplebaum@gmail.com"> seanapplebaum@gmail.com</a>
      </h6>
    </Jumbotron>
  );
}

function Construction() {
  return (
    <Image
      src={process.env.PUBLIC_URL + "/under-construction.png"}
      width="150"
      height="150"
      className="construction-image"
    />
  );
}

export default UnderConstruction;
