import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Search from "./pages/search/Search";
import Detail from "./pages/detail/Detail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Search />
    <Detail />
  </React.StrictMode>
);
