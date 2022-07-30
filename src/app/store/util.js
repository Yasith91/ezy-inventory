// Create action common function
const createAction = (type, payload) => {
  const action = {
    type,
  };
  if (payload) {
    action.payload = payload;
  }
  return action;
};

export default createAction;
