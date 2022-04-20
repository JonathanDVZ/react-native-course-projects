import axios from 'axios';
import { SPOTIFY_TOKEN } from '@env';

export default axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    Authorization: `Bearer ${SPOTIFY_TOKEN}`
  }
});
