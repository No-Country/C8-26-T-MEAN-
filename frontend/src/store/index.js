import { configureStore } from '@reduxjs/toolkit'
import user from './slices/users.slice'
import points from './slices/points.slice'
import product from './slices/products.slice'
export default configureStore({
  reducer: {
    user,
    product,
	}
})