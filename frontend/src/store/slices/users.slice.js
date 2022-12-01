import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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

export const getUserThunk = (data) => (dispach) =>{
    const URL ="http://localhost:3001/users/auth"
    return axios.post(URL,data)
    .then(res =>dispach(setValue(res.data)) )
    .catch( e=> console.log(e))
}

