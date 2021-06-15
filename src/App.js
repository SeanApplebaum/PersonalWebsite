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
            <Route path={process.env.PUBLIC_URL + "/"}>
              <UnderConstruction />
            </Route>
            <Route path={process.env.PUBLIC_URL + "/about"}>
              <div>about</div>
            </Route>
            <Route path={process.env.PUBLIC_URL + "/experience"}>
              <div>experience</div>
            </Route>
            <Route path={process.env.PUBLIC_URL + "/skills"}>
              <div>skills</div>
            </Route>
            <Route path={process.env.PUBLIC_URL + "/projects"}>
              <div>projects</div>
            </Route>
            <Route path={process.env.PUBLIC_URL + "/contact"}>
              <div>contact</div>
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
