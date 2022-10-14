import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";

export const fetchProducts = createAsyncThunk('app/fetchProduct',
    async () => await api.fetchProducts()    
)

export const fetchDescription = createAsyncThunk('app/fetchDescription',
    async (id) => await api.fetchDescription(id)    
)

export const login = createAsyncThunk('app/login',
    async (data) => await api.login(data)
)

export const saveProduct = createAsyncThunk('app/saveProduct',
    async (data) => await api.saveProduct(data)    
)

export const signup = createAsyncThunk('app/signup',
    async (data) => await api.signup(data)    
)

export const deleted = createAsyncThunk('app/deleted',
    async (id) => await api.deleted(id)    
)