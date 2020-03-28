import * as types from '../constants/types';
import * as API from '../shared/http';
import {createError} from './error';

export function showComments(postId){
    return {
        type: types.comments.SHOW,
        postId
    }
}

export function toggleComments(postId){
    return {
        type: types.comments.TOGGLE,
        postId
    }
}

export function updateAvailableComments(comments){
    return {
        type: types.comments.GET,
        comments
    }
}

export function createComment(payload){
    return dispatch => {
        return API.createComment(payload)
            .then(res => res.json())
            .then(comment => {dispatch(
                {
                    type: types.comments.CREATE,
                    comment
                }
            )})
            .catch(err => dispatch(createError(err)));
    }
}

export function getCommentsByPost(postId){
    return dispatch => {
        return API.getCommentsByPost(postId)
            .then(res => res.json())
            .then(comments => {dispatch(updateAvailableCommentscomments(comments))})
            .catch(err => dispatch(createError(err)));
    }
}
