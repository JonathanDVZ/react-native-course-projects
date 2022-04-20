import React from 'react';
import Navigation from './src/navigations/Navigation';
import AuthProvider from './src/context/AuthStore/StoreState';
import TrackProvider from './src/context/TrackStore/StoreState';
import LocationProvider from './src/context/LocationStore/StoreState';

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
