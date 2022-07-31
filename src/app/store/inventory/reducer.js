import * as types from "./actionTypes";

const initialState = {
  inventories: [],
  inventoryItems: {},
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_INVENTORY_TYPE:
      return { ...state, inventories: action.payload };
    case types.SET_INVENTORY_ITEM:
      return {
        ...state,
        inventoryItems: { ...state.inventoryItems, ...action.payload },
      };
    default:
      return state;
  }
};
