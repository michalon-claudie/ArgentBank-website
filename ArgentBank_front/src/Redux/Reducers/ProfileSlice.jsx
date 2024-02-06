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
        setEditUsernameProfile(state,action){
            state = { ...state, userName: action.payload };
        },
        resetProfile: () => {
            
            },
        }
    }
);

export const { setGetProfile,setEditUsernameProfile,resetProfile } = profileSlice.actions;
export default profileSlice.reducer;