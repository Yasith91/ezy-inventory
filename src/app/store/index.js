import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import testReducer from "./test/reducer";

const client = axios.create({
  baseURL: "", // URL endpoint goes here,
  responseType: "json",
});

export const rootReducer = combineReducers({
  testData: testReducer,
});

const store = createStore(
  testReducer,
  applyMiddleware(thunk, axiosMiddleware(client))
);

export default store;
