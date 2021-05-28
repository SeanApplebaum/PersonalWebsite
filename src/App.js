import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
//import ReactNotification from "react-notifications-component";

import MainNavbar from "./components/MainNavbar";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  let prepath = process.env.PUBLIC_URL;
  return (
    <BrowserRouter>
      {/*<ReactNotification />*/}
      <Helmet>
        <meta name="theme-color" content="#343a40" />
        <title>Sean Applebaum</title>
      </Helmet>
      <MainNavbar />

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
    </BrowserRouter>
  );
}

export default App;
