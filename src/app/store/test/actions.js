import * as types from "./actionTypes";

export const getTestData = () => (dispatch, getState) => {
  dispatch({
    types: [types.LOAD_DATA, types.LOAD_DATA_SUCCESS, types.LOAD_DATA_FAIL],
    payload: {
      request: {
        url: "https://archive.org/metadata/TheAdventuresOfTomSawyer_201303",
        method: "get",
      },
    },
  });
};
