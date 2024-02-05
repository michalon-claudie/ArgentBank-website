import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    token: null,
    user: null,
    error: null
};

const authSlice = createSlice({
    name: 'UserAuth',
    initialState,
    reducers: {
        loginRequest(state) {
            state.error = null;
        },
        loginSuccess(state, action) {
            state.isLoggedIn = true;
            state.user = action.payload;
            state.token = action.payload.token;
            state.error = null;
        },
        loginFailure(state, action) {
            state.isLoggedIn = false;
            state.user = null;
            state.token = null;
            state.error = action.payload;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.user = null;
            state.token = null;
            state.error = null;
        },
    }
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;