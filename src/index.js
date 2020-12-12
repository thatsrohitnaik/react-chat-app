import React from "react";
import ReactDOM from "react-dom";
import ChatStore from "./store/chatStore";
import { Provider } from "mobx-react";

import App from "./App";

const stores = {
  ChatStore
};


ReactDOM.render(
  <Provider {...stores}>
    <App store={stores} />
  </Provider>
  , document.getElementById("root"));
