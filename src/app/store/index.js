import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import throttle from "lodash/throttle";

import testReducer from "./test/reducer";
import inventoryReducer from "./inventory/reducer";
import { loadState, saveState } from "./localStorage";

const client = axios.create({
  baseURL: "", // URL endpoint goes here,
  responseType: "json",
});

export const rootReducer = combineReducers({
  testData: testReducer,
  inventoryData: inventoryReducer,
});

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk, axiosMiddleware(client))
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
