import React from "react";
import { withBookstoreService } from "../hoc";
import { Route, Switch } from "react-router-dom";

import { HomePage, CartPage } from "../pages";
import ShopHeader from "../shop-header/shop-header";

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </main>
  );
};

export default withBookstoreService()(App);
