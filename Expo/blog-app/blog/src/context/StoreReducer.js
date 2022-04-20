import { GET_BLOGPOST, EDIT_BLOGPOST, DELETE_BLOGPOST } from './../types';

export default (state, action) => {
  switch (action.type) {
    case GET_BLOGPOST:
      return action.payload;
    case EDIT_BLOGPOST:
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case DELETE_BLOGPOST:
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};
