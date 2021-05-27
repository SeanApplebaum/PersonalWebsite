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
        <Route path="/">
          <UnderConstruction />
        </Route>
        <Route path="/about">
          <UnderConstruction />
        </Route>
        <Route path="/experience">
          <UnderConstruction />
        </Route>
        <Route path="/skills">
          <UnderConstruction />
        </Route>
        <Route path="/projects">
          <UnderConstruction />
        </Route>
        <Route path="/contact">
          <UnderConstruction />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
