import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import favReducer from "../reducers/favourite";
import searchJobsReducer from "../reducers/jobs";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  favorite: {
    data: [],
  },
  jobsSearch: {
    result: [],
  },
};

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
      // the secret key will be used for encrypt/decrypt the stringified version of your redux
      // store saved in the engine of choice
      onError: (error) => {
        console.log(error);
      },
    }),
  ],
};
const allReducers = combineReducers({
  favorite: favReducer,
  jobsSearch: searchJobsReducer,
});
const persistedReducer = persistReducer(persistConfig, allReducers);
const reduxStore = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(reduxStore);
export { reduxStore, persistor };
