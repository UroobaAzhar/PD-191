import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
// this was the store with rtk:
// import store from "./store/store.js";
// without rtk store above
// createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <StrictMode>
//       <App />
//     </StrictMode>
//   </Provider>
// );

// --------with rtk store------
import { storeTwo } from "./storetwo/storeTwo.js";
createRoot(document.getElementById("root")).render(
  <Provider store={storeTwo}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
