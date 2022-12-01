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

export const getProductThunk = (id) => (dispach) =>{
    const URL ="http://localhost:3001/products"
    return axios.get(URL,id)
    .then(res =>dispach(setValueProduct(res.data)) )
    .catch( e=> console.log(e))
}

