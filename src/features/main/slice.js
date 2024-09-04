import { createSlice } from '@reduxjs/toolkit';
import { main } from './actions';



const mainSlice = createSlice({
    name: 'main',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
        searchHistory: [],
    },
    reducers: {
        addSearchHistory: (state, action) => {
            if (!state.searchHistory.includes(action.payload)) {
                state.searchHistory = [action.payload, ...state.searchHistory.slice(0, 4)];
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(main.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(main.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(main.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { addSearchHistory } = mainSlice.actions;


export default mainSlice.reducer;