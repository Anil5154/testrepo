import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./redux/api/authAPI"
import userReducer from './redux/slice/userSlice';

export const store = configureStore({
    reducer:{
        [authApi.reducerPath]: authApi.reducer,
        user: userReducer,  
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({serializableCheck:false}).concat([])
})