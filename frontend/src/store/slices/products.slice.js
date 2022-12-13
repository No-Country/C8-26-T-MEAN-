import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: '',
    reducers: {
        setValueProduct:(state,action) =>{
            return action.payload
        } 
    }
})

export const { setValueProduct } = productSlice.actions;

export default productSlice.reducer;

export const getProductThunk = (id) => (dispach) =>{
    const URL =`http://localhost:3001/cart/${id}`
    return axios.get(URL)
    .then(res => {
        const cant= res.data.products.length
        dispach(setValueProduct({cant})) 
        console.log(cant)
    })
    .catch( e=> console.log(e))
}

