import React, { useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StoreContext from './StoreContext';
import StoreReducer from './StoreReducer';
import trackerApi from './../../api/tracker';
import { navigate } from '../../navigationRef';

const StoreState = ({ children }) => {
  const initialState = { token: null, errorMessage: '', gettingToken: true };

  const [state, dispatch] = useReducer(StoreReducer, initialState);

  const tryLocalSignin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      dispatch({ type: 'signin', payload: token });
      navigate('TrackListFlow', { screen: 'TrackList' });
    } else {
      navigate('Signup');
    }
    dispatch({ type: 'getting_token', payload: false });
  };

  const clearErrorMessage = () => {
    dispatch({ type: 'clear_error_message' });
  };

  const signup = async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });

      navigate('TrackListFlow', { screen: 'TrackList' });
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up'
      });
    }
  };

  const signin = async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signin', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });
      navigate('TrackListFlow', { screen: 'TrackList' });
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign in'
      });
    }
  };

  const signout = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    navigate('Signup');
  };

  return (
    <StoreContext.Provider
      value={{
        token: state.token,
        errorMessage: state.errorMessage,
        gettingToken: state.gettingToken,
        signin,
        signout,
        signup,
        clearErrorMessage,
        tryLocalSignin
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreState;
