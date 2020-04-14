import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import burgerBuilderReducer from "./store/reducers/burgerBuilder";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  burgerBuilderReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();

// Provider allows us to add the reducer store that we created so we can manage state
// composeEnhancers allows us to use asyncronous code in our action creators.
// applyMiddleware needs to be passed into the composeEnhancers with the thunk argument which is the middleware i want to apply
// apply middleware is one kind of enhancer, dev tools is another. "Compose" allows us to apply this middleware
