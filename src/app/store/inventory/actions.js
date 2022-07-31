import * as types from "./actionTypes";
import createAction from "../util";

/**
 * @name setInventoryItem
 * @description - Set inventory item
 */
export const setInventoryItem = (data) => (dispatch, getState) => {
  console.log("Data ppp", data);
  return dispatch(createAction(types.SET_INVENTORY_ITEM, data));
};

/**
 * @name setInventoryType
 * @description - Set inventory type
 */
export const setInventoryTypes = (data) => (dispatch, getState) => {
  return dispatch(createAction(types.SET_INVENTORY_TYPE, data));
};
