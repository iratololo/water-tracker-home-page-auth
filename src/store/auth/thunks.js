import { createAsyncThunk } from "@reduxjs/toolkit";

import { authorizationApi, logoutApi, refreshApi, registrationApi } from "api/auth";

export const signUpThunk = createAsyncThunk('auth/signUp', async (body, { rejectWithValue }) => {
    try {
        const { data } = await registrationApi(body);
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const loginThunk = createAsyncThunk('auth/login', async (body, { rejectWithValue }) => {
    try {
        const { data } = await authorizationApi(body);
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const refreshThunk = createAsyncThunk('auth/refresh', async (_, { rejectWithValue, getState }) => {
    const token = getState().auth.token;
    try {
        const { data } = await refreshApi(token);
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const logoutThunk = createAsyncThunk('auth/logout', async (_, { rejectWithValue, getState }) => {
    const token = getState().auth.token;
    try {
        const { data } = await logoutApi(token);
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})