import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import { BrowserRouter } from "react-router-dom";
import "./pages/pagesStyle.css";
import { Provider } from "react-redux";
//import store from "./stores";
import './assests/css/index.css'
import store from "./store";
import  "./i18n";
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>
// );
root.render(
  <Provider store={store}> <App></App></Provider>
)
