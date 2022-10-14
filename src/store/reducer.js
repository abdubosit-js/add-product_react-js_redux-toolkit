import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import { deleted, fetchDescription, fetchProducts, login, saveProduct, signup } from './actions';

const initialState = {
    products: [],
    product: {},
    auth: Boolean(localStorage.getItem("token")),
    username: localStorage.getItem("username"),
    token: localStorage.getItem("token"),
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        logout: (state) => {
            state.auth = false
            state.username = null
            state.token = null

            localStorage.removeItem('token')
            localStorage.removeItem('username')
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload
        });

        builder.addCase(fetchDescription.fulfilled, (state, action) => {
            state.product = action.payload
        });
        
        builder.addCase(login.fulfilled, (state, action) => {
            state.auth = true
            state.username = action.payload.user.username
            state.token = action.payload.token

            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('username', action.payload.user.username)
        });
        
        builder.addCase(signup.fulfilled, (state, action) => {
            toast.success(action.payload.message)
        });
        
        builder.addCase(deleted.fulfilled, (state, action) => {

        });

        builder.addCase(saveProduct.fulfilled, (state, action) => {
            
        })
    }
})

export const { logout } = appSlice.actions

export default appSlice.reducer