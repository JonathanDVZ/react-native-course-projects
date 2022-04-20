import React, { useReducer } from 'react';
import StoreContext from './StoreContext';
import StoreReducer from './StoreReducer';

const StoreState = ({ children }) => {
  const initialState = {
    name: '',
    recording: false,
    locations: [],
    currentLocation: null
  };

  const [state, dispatch] = useReducer(StoreReducer, initialState);

  const changeName = (name) => {
    dispatch({ type: 'change_name', payload: name });
  };

  const startRecording = () => {
    dispatch({ type: 'start_recording' });
  };

  const stopRecording = () => {
    dispatch({ type: 'stop_recording' });
  };

  const addLocation = (location, recording) => {
    dispatch({ type: 'add_current_location', payload: location });
    if (recording) {
      dispatch({ type: 'add_location', payload: location });
    }
  };

  const reset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <StoreContext.Provider
      value={{
        name: state.name,
        recording: state.recording,
        locations: state.locations,
        currentLocation: state.currentLocation,
        startRecording,
        stopRecording,
        addLocation,
        changeName,
        reset
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreState;
