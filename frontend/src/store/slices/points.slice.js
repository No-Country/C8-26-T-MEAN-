import { createSlice } from '@reduxjs/toolkit';

export const pointSlice = createSlice({
    name: 'points',
    initialState: 0,
    reducers: {
        setValuePoints:(state,action) =>{
            return action.payload
        }
    }
})

export const { setValuePoints } = pointSlice.actions;

export default pointSlice.reducer;