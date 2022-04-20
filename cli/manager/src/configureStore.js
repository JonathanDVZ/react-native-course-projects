import { createStore, applyMiddleware } from 'redux';
import Reducers from './reducers';
import ReduxThunk from 'redux-thunk';

export default configureStore = () => {
  const store = createStore(Reducers, applyMiddleware(ReduxThunk));
  return store;
};
