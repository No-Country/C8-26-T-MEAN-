import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: '',
    reducers: {
        setValue:(state,action) =>{
            return action.payload
        }
        // setValue:(state,action) =>action.payload
    }
})

export const { setValue } = userSlice.actions;

export default userSlice.reducer;