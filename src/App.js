import React, { useContext, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Footer from "./components/Footer";
import Luxory from "./pages/Luxory";
import Page404 from "./pages/Page404";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/rooms" exact>
          <Rooms />
        </Route>
        <Route path="/rooms/:id" exact>
          <SingleRoom />
        </Route>
        <Route path="/luxory">
          <Luxory />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
