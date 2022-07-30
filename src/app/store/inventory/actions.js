import * as types from "./actionTypes";
import createAction from "../util";

/**
 * @name setInventoryItem
 * @description - Set inventory item
 */
export const setInventoryItem = () => (dispatch, getState) => {
  dispatch(createAction(types.SET_INVENTORY_TYPE));
};

/**
 * @name setInventoryType
 * @description - Set inventory type
 */
// export const setInventoryType = (data) => (dispatch, getState) => {
//   console.log("dataaaa", data);
//   return dispatch(createAction(types.SET_INVENTORY_TYPE));
//   // dispatch(createAction(types.SET_INVENTORY_TYPE));
// };

export const setInventoryTypes = (data) => (dispatch, getState) => {
  console.log("dataaaa", data);
  dispatch({
    type: types.SET_INVENTORY_TYPE,
    payload: data,
  });
};

// /**
//  * @name listEstimates
//  * @description - list estimates
//  */
//  export const listEstimates = id => async dispatch => {
//   dispatch(createAction(types.LOAD_ESTIMATE_DATA));
//   try {
//     const response = await API.get("invoices", "estimates", {
//       queryStringParameters: {
//         companyId: id,
//       },
//     });
//     return dispatch(
//       createAction(types.LOAD_ESTIMATE_DATA_SUCCESS, response?.data),
//     );
//   } catch (err) {
//     return dispatch(
//       createAction(types.LOAD_ESTIMATE_DATA_FAIL, {
//         error: "Error occured",
//       }),
//     );
//   }
// };