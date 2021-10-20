import { createStore } from "redux";
import favReducer from "../reducers";

export const initialState = {
  jobs: {
    favorite: [],
  },
};

const reduxStore = createStore(
  favReducer,
  initialState,
  window.___REDUX_DEVTOOLS_EXTENSION__ && window.___REDUX_DEVTOOLS_EXTENSION__()
);

export default reduxStore;
