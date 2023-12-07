import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import createStorage from "web-localstorage-plus";
import store from "./store";
import { Provider } from "react-redux";

createStorage({
  rootName: "crm-storage",
  noUseLocalStorage: false,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
