import { useContext } from 'react';
import TrackContext from '../context/TrackStore/StoreContext';
import LocationContext from '../context/LocationStore/StoreContext';
import { navigate } from '../navigationRef';

export default () => {
  const { createTrack } = useContext(TrackContext);
  const { locations, name, reset } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigate('TrackList');
  };

  return [saveTrack];
};
