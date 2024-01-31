import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    user: null,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest(state) {
            state.error = null;
        },
        loginSuccess(state, action) {
            state.isLoggedIn = true;
            state.user = action.payload;
            state.error = null;
        },
        loginFailure(state, action) {
            state.isLoggedIn = false;
            state.user = null;
            state.error = action.payload;
        },
        logout(state, action) {
            state.isLoggedIn = false;
            state.user = null;
            state.error = null;
        },
    }
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;