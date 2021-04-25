import { Route, Switch, useLocation } from "react-router";
import { useEffect } from "react";
import "./App.css";
import Contact from "./components/Contact";
import DonatePlasma from "./components/DonatePlasma";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import RequestVM from "./components/RequestVM";
import UrgentHelp from "./components/UrgentHelp";
import RequestPlasma from "./components/RequestPlasma";
import RequestBed from "./components/RequestBed";
import RequestOxygen from "./components/RequestOxygen";
import MentalHelp from "./components/MentalHelp";
import ImportantLinks from "./components/ImportantLinks";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/donateplasma">
          <DonatePlasma />
        </Route>
        <Route exact path="/importantlinks">
          <ImportantLinks />
        </Route>
        <Route exact path="/requestplasma">
          <RequestPlasma />
        </Route>
        <Route exact path="/requestbed">
          <RequestBed />
        </Route>
        <Route exact path="/requestoxygen">
          <RequestOxygen />
        </Route>
        <Route exact path="/mentalhelp">
          <MentalHelp />
        </Route>
        <Route exact path="/requestvm">
          <RequestVM />
        </Route>
        <Route path="/">
          <UrgentHelp />
        </Route>
      </Switch>

      <hr />
      <Main />
      <Footer />
      <Contact />
    </div>
  );
}

export default App;
