import * as types from "../constants/types";
import * as API from "../shared/http";
import { createError } from "./error";

export function getPosts() {
  return dispatch => {
    return API.getPosts()
      .then(res => res.json())
      .then(posts => {
        dispatch({
          type: types.posts.GET,
          posts
        });
      })
      .catch(err => dispatch(createError(err)));
  };
}

export function createPost(payload) {
  return dispatch => {
    return API.createPost(payload)
      .then(res => res.json())
      .then(post => {
        dispatch({
          type: types.posts.CREATE,
          post
        });
      })
      .catch(err => dispatch(createError(err)));
  };
}
