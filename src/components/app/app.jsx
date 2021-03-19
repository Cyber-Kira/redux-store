import React from "react";
import { withBookstoreService } from "../hoc";
import { Route, Switch, Link } from "react-router-dom";

import { HomePage, CartPage } from "../pages";

const App = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </>
  );
};

export default withBookstoreService()(App);
