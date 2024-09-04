import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const main = createAsyncThunk(
    'main',
    async (query = '') => {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts${query ? `?q=${query}` : ''}`
        );
        return response.data;
    }
);

