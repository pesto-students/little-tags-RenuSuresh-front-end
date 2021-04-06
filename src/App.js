import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import FooterIndex from "./components/Footer";
import CategoryIndex from "./components/Category";
import ProductIndex from "./components/Product";
import CartIndex from "./components/Cart";
import PaymentIndex from "./components/Checkout";
import ThankYouIndex from "./components/ThankYou";
import HistoryIndex from "./components/History";
import WishlistIndex from "./components/Wishlist";
function App() {
  return (
    <Suspense fallback="loading">
      <Router>
        <div className="app">
          <Switch>
            <Route path="/search">
              <Header />
              <CategoryIndex />
              <FooterIndex />
            </Route>
            <Route path="/product">
              <Header />
              <ProductIndex />
              <FooterIndex />
            </Route>
            <Route path="/cart">
              <Header />
              <CartIndex />
              <FooterIndex />
            </Route>
            <Route path="/payment">
              <Header />
              <PaymentIndex />
              <FooterIndex />
            </Route>
            <Route path="/orderPlacedSuccessfully">
              <Header />
              <ThankYouIndex />
              <FooterIndex />
            </Route>
            <Route path="/history">
              <Header />
              <HistoryIndex />
              <FooterIndex />
            </Route>
            <Route path="/wishlist">
              <Header />
              <WishlistIndex />
              <FooterIndex />
            </Route>
            <Route path="/">
              <Header />
              <Home />
              <FooterIndex />
            </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
