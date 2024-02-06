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
            state.userName = action.payload
        },
        resetProfile: () => {
            return initialState;
            },
        }
    }
);

export const { setGetProfile,setEditUsernameProfile,resetProfile } = profileSlice.actions;
export default authSlice.reducer;