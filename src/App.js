import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Suspense, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { useTranslation } from "react-i18next";

function App() {
  // const [t, i18n] = useTranslation("common");
  // const [lang, setLang] = useState("en");

  // const changeLang = (event) => {
  //   setLang(event.target.value);
  //   i18n.changeLanguage(event.target.value);
  // };

  return (
    <Suspense fallback="loading">
      <Router>
        <div className="app">
          <Switch>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
