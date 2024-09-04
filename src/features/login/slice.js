import { createSlice } from '@reduxjs/toolkit';

import { login } from './actions';

const initialState = {
    token: "",
    loading : false,
    error : null
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
    },
   
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                // localStorage.setItem('token', action.payload.token);
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to login";
            });

    },
});



export default loginSlice.reducer;
