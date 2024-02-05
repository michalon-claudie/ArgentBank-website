import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
    name: 'Profile',
    initialState:{
        email:"",
        firstName:"",
        lastName:"",
        username:""
    },
    reducers: {
        setGetProfile(state, action) {
            state.email=action.payload.email
            state.firstName=action.payload.firstName
            state.lastName=action.payload.lastName
            state.username=action.payload.username
        },
        setEditUsernameProfile(state,action){

        }
    }
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;