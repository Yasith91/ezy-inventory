import * as types from "./actionTypes";

const initialState = {
  data: { test: "test obj" },
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_DATA:
      console.log(action);
      return state;
    case types.LOAD_DATA_SUCCESS:
      console.log(action);
      return state;
    default:
      return state;
  }
};
