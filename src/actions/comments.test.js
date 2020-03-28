jest.mock('../../src/shared/http');

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import initialState from '../../src/constants/initialState';
import * as types from '../../src/constants/types';
import * as API from '../../src/shared/http';
import {
    showComments,
    toggleComments,
    updateAvailableComments,
    createComment,
    getCommentsByPost
} from '../../src/actions/comments';

const mockStore = configureStore([thunk]);
describe('actions', () => {
    let store;
    beforeEach(() => {
        store = mockStore(initialState)
    })
    test('showComments', () => {
        const postId = 'id';
        const actual = showComments(postId);
        const expected = {
            type: types.comments.SHOW,
            postId
        };
        expect(actual).toEqual(expected);
    })
    test('createComment', async () => {
        const mockComment = {content:'test'};
        API.createComment = jest.fn(() =>{
            return Promise.resolve({
                json: () => Promise.resolve([mockComment])
            })
        })
        await store.dispatch(createComment(mockComment));
        const actions = store.getActions();
        const expectedActions = [{
            type: types.comments.CREATE,
            comment: [mockComment]
        }]
        expect(actions).toEqual(expectedActions);
    })
})