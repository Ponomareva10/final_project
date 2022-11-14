import{ createSlice } from '@reduxjs/toolkit';

const initialState = {
    registr: {},
};

const usertSlice = createSlice({
    name: 'userRegistration',
    initialState,
    reducers: {
        setUset(state, action) {
            state.registr = action.payload
        },
        removeUser(state){
            state.registr = {}
        },
    },
});

export const {setUser, removeUser} = usertSlice.actions;

export default usertSlice.reducer;