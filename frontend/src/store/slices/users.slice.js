import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: 'florencio',
    reducers: {
        setValue:(state,action) =>{
            return action.payload
        }
    }
})

export const { setValue } = userSlice.actions;

export default userSlice.reducer;