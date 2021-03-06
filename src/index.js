import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import lang_en from "./locales/en/common.json";
import lang_hi from "./locales/hi/common.json";
import "font-awesome/css/font-awesome.min.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./service/reducer";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "english", // language to use
  resources: {
    english: {
      common: lang_en, // 'common' is our custom namespace
    },
    hindi: {
      common: lang_hi,
    },
  },
});

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
