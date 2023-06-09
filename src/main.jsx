import React from "react";
import ReactDOM from "react-dom/client";

import "./main.css";
import { Provider } from "react-redux";
import store from "./redux/store";

import Home from "./Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <Home></Home>
    </React.StrictMode>
  </Provider>
);
