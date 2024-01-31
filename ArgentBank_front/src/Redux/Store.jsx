import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';

const store = configureStore({
  rreducer: {
    auth: authReducer,
 }
});

export default store;
