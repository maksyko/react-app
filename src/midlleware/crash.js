import { createError } from "../actions/error";
export default store => next => action => {
  try {
    if (action.error) {
      console.error(action.error);
      console.error(action.info);
    }
  } catch (err) {
    console.error(err);
    return store.dispatch(createError(err));
  }
};
