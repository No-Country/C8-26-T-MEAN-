import { createSlice } from '@reduxjs/toolkit';

export const cateSlice = createSlice({
    name: 'cate',
    initialState: 0,
    reducers: {
        setValueCate:(state,action) =>{
            return action.payload
        }
    }
})

export const { setValueCate } = cateSlice.actions;

export default cateSlice.reducer;