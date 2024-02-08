import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
    name: 'Profile',
    initialState:{
        email:"",
        firstName:"",
        lastName:"",
        userName:""
    },
    reducers: {
        setGetProfile(state, action) {
        const { email, firstName, lastName, userName } = action.payload.data.body;
        state.email = email;
        state.firstName = firstName;
        state.lastName = lastName;
        state.userName = userName;
        },
        resetProfile: () => {
            
            },
        }
    }
);

export const { setGetProfile,resetProfile } = profileSlice.actions;
export default profileSlice.reducer;