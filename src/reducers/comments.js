import inititalState from "../constants/initialState";
import * as types from "../constants/types";

export function comments(state = inititalState.comments, action) {
  switch (action.type) {
    case types.comments.GET: {
      const { comments } = action;
      let nextState = Object.assign({}, state);
      for (let comment of comments) {
        if (!nextState[comment.id]) {
          nextState[comment.id] = comment;
        }
      }
      return nextState;
    }
    case types.comments.CREATE: {
      const { comment } = action;
      let nextState = Object.assign({}, state);
      nextState[comment.id] = comment;
      return nextState;
    }

    default:
      return state;
  }
}
