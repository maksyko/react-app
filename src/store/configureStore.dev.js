import thunk from "redux-thunk";
import { createStore, compose , applyMiddleware} from "redux";
import rootReducer from "../reducers/root";
import crashReporting from '../midlleware/crash';

let store;
export default initialState => {
  if (store) {
    return store;
  }

  const createdStore = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, crashReporting),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  store = createdStore;
  return store;
};
