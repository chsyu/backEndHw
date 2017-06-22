import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
const ROOT_URL = 'http://localhost:3000';
const API_KEY = '?key=claire';
export function selectWork(work) {
  // selectBook is an ActionCreator, it needs to return an action object with a type property.
  return {
    type: 'WORK_SELECTED',
    payload: work
  };
}
export function selectOne(work){
switch(work){
  case 'no':
  return null;
};
    return {
    type: 'ONE_SELECTED',
    payload: work
  };
  
}
export function selectTwo(work){

    return {
    type: 'TWO_SELECTED',
    payload: work
  };
  
}
export function uploadImg(){
  return {
    type: 'TWO_SELECTED',
    payload: work
  };
}

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  };
}