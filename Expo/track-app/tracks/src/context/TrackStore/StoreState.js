import React, { useReducer } from 'react';
import StoreContext from './StoreContext';
import StoreReducer from './StoreReducer';
import trackerApi from './../../api/tracker';

const StoreState = ({ children }) => {
  const initialState = [];

  const [state, dispatch] = useReducer(StoreReducer, initialState);

  const fetchTracks = async () => {
    const response = await trackerApi.get('/tracks');
    dispatch({ type: 'fetch_tracks', payload: response.data });
  };

  const createTrack = async (name, locations) => {
    await trackerApi.post('/tracks', { name, locations });
  };

  return (
    <StoreContext.Provider value={{ state, fetchTracks, createTrack }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreState;
