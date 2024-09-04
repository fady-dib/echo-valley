import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../src/features/login/slice'
import mainReducer  from '../src/features/main/slice'


export const store = configureStore({
    reducer: {
        login : loginReducer,
        main : mainReducer
    },
});

export default store;
