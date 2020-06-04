import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Main from './pages/Main/Main'
import Main from "./pages/Main/Main";
import SignInUp from "./pages/SignInUp/SignInUp";
import Products from "./pages/Products/Products";
import ProductDetailPage from "./pages/Products/ProductDetailPage/ProductDetailPage";
import Support from "./pages/Support/Support";
import Order from "./pages/Order/Order";
import ProductsDetailPage2 from "./pages/Products/ProductsDetailPage2/ProductsDetailPage2";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signIn" component={SignInUp} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/detail" component={ProductDetailPage} />
          <Route
            exact
            path="/products/speaker"
            component={ProductsDetailPage2}
          />
          <Route exact path="/order" component={Order} />
          <Route exact path="/support" component={Support} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
