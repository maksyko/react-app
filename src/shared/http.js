import fetch from "isomorphic-fetch";

function post(url, payload) {
  return fetch(url, generateFetchConfig("POST", payload));
}

function get(url) {
  return fetch(url, generateFetchConfig("GET"));
}

function generateFetchConfig(method, body = null) {
  const upCasedMethod = method.toUpperCase();
  const config = {
    method: upCasedMethod,
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (body) {
    config.body = JSON.stringify(body);
  }
  return config;
}

export function createPost(payload) {
  return post(`${process.env.ENDPOINT}/posts`, payload);
}

export function getPosts() {
  return get(`${process.env.ENDPOINT}/posts`);
}

export function createComment(payload) {
  return post(`${process.env.ENDPOINT}/comments`, payload);
}

export function getCommentsByPost(postId) {
  return get(`${process.env.ENDPOINT}/comments?postId=${postId}&_expand=user`);
}
