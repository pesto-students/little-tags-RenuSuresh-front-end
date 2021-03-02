import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import FooterIndex from "./components/Footer";
function App() {
  return (
    <Suspense fallback="loading">
      <Router>
        <div className="app">
          <Switch>
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
