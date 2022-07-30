import * as types from "./actionTypes";

const initialState = {
  data: { test: "test obj" },
  inventories: "",
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_INVENTORY_TYPE:
      console.log(action);
      return {...state, inventories: action.payload};
    default:
      return state;
  }
};
