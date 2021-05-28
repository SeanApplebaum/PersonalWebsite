import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
//import ReactNotification from "react-notifications-component";

import MainNavbar from "./components/MainNavbar";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  return (
    <BrowserRouter>
      {/*<ReactNotification />*/}
      <Helmet>
        <meta name="theme-color" content="#343a40" />
        <title>Sean Applebaum</title>
      </Helmet>
      <MainNavbar />

      <Switch>
        <Route exact path="/">
          <UnderConstruction />
        </Route>
        <Route exact path="/about">
          <UnderConstruction />
        </Route>
        <Route exact path="/experience">
          <UnderConstruction />
        </Route>
        <Route exact path="/skills">
          <UnderConstruction />
        </Route>
        <Route exact path="/projects">
          <UnderConstruction />
        </Route>
        <Route exact path="/contact">
          <UnderConstruction />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
