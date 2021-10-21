import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import favReducer from "../reducers/favourite";
import searchJobsReducer from "../reducers/jobs";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  favorite: {
    data: [],
  },
  jobsSearch: {
    result: [],
  },
};

const allReducers = combineReducers({
  favorite: favReducer,
  jobsSearch: searchJobsReducer,
});

const reduxStore = createStore(
  allReducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default reduxStore;
