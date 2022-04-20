import { createStore } from 'redux';
import Reducers from './reducers';

export default configureStore = () => {
  const store = createStore(Reducers);
  return store;
};
