import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeMithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer";

const store = createStore(
  rootReducer,
  composeMithDevTools(applyMiddleware(thunk))
);

export default store;
