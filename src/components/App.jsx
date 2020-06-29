import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Page404 from "./Pages/Page404";
import Register from "./Pages/Register";
import Protected from "./Routes/Protected";
import Public from "./Routes/Public";
import Header from "./Organisms/Header";
import Temperatura from "./Pages/Temperatura";
import Mapa from "./Pages/Mapa";
import Footer from "./Organisms/Footer";

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Protected path="/" exact component={Home} />
      <Protected path="/temperaturas" component={Temperatura} />
      <Protected path="/mapa"  component={Mapa} />
      <Public path="/login" component={Login} />
      <Public path="/registro" exact component={Register} />
      <Route component={Page404} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
