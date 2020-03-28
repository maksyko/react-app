import fetch from 'isomorphic-fetch';

function post(url, payload){
    return fetch(url, generateFetchConfig('POST', payload));
}

function get(url){
    return fetch(url, generateFetchConfig('GET'));
}

function generateFetchConfig(method, body = null) {
    const upCasedMethod = method.toUpperCase();
    const config = {
        method: upCasedMethod,
        headers: {
            'Content-Type': 'application/json',
        },
    };
    config.body = JSON.stringify(body);
    return config;
}

export function createComment(payload){
    return post(`${process.env.ENDPOINT}/comments`, payload);
}

export function getCommentsByPost(postId){
    return get(`${process.env.ENDPOINT}/comments?postId=${postId}&_expand=user`);
}