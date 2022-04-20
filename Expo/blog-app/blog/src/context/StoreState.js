import React, { useReducer } from 'react';
import StoreContext from './StoreContext';
import StoreReducer from './StoreReducer';
import jsonServer from '../api/jsonServer';
import { GET_BLOGPOST, EDIT_BLOGPOST, DELETE_BLOGPOST } from './../types';

const StoreState = ({ children }) => {
  const initialState = [];

  const [state, dispatch] = useReducer(StoreReducer, initialState);

  const getBlogPosts = async () => {
    const response = await jsonServer.get('/blogposts');

    dispatch({ type: GET_BLOGPOST, payload: response.data });
  };

  const addBlogPost = async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content });

    if (callback) {
      callback();
    }
  };

  const deleteBlogPost = async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);

    dispatch({ type: DELETE_BLOGPOST, payload: id });
  };

  const editBlogPost = async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });

    dispatch({
      type: EDIT_BLOGPOST,
      payload: { id, title, content }
    });
    if (callback) {
      callback();
    }
  };

  return (
    <StoreContext.Provider
      value={{
        getBlogPosts,
        addBlogPost,
        deleteBlogPost,
        editBlogPost,
        state
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreState;
