import { HashRouter, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
//import ReactNotification from "react-notifications-component";

import MainNavbar from "./components/MainNavbar";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      {/*<ReactNotification />*/}
      <Helmet>
        <meta name="theme-color" content="#343a40" />
        <title>Sean Applebaum</title>
      </Helmet>
      <MainNavbar />

      <Route
        render={({ location }) => (
          <Switch location={location}>
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
        )}
      />
      {/*
      <Switch>
        <Route path={prepath + "/"}>
          <UnderConstruction />
        </Route>
        <Route path={prepath + "/about"}>
          <UnderConstruction />
        </Route>
        <Route path={prepath + "/experience"}>
          <UnderConstruction />
        </Route>
        <Route path={prepath + "/skills"}>
          <UnderConstruction />
        </Route>
        <Route path={prepath + "/projects"}>
          <UnderConstruction />
        </Route>
        <Route path={prepath + "/contact"}>
          <UnderConstruction />
        </Route>
      </Switch>
    */}
    </HashRouter>
  );
}

export default App;
