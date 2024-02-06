import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../Redux/Reducers/AuthReducers'
import ProfileSlice from '../Redux/Reducers/ProfileSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: ProfileSlice,
 }
});

export default store;
