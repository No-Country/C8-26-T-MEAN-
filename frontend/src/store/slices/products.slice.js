import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: 0,
    reducers: {
        setValueProduct:(state,action) =>{
            return action.payload
        }
    }
})

export const { setValueProduct } = productSlice.actions;

export default productSlice.reducer;