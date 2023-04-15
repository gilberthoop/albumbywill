import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/**
 * Make the API fetch photos request to return the photos data
 * that will be used in the reducer.
 */
const API_ENDPOINT_URL = 'https://agencyanalytics-api.vercel.app/images.json'
const fetchPhotos = createAsyncThunk(
  'photos/fetch',
  async () => {
    const response = await axios.get(API_ENDPOINT_URL);
    return response.data;
  }
);

export { fetchPhotos };