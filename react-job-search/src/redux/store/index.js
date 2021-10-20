import { createStore } from "redux";
import favReducer from "../reducers";

export const initialState = {
  favorite: [],
};

const reduxStore = createStore(
  favReducer,
  initialState,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default reduxStore;
