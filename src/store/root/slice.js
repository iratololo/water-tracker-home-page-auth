import { createSlice } from '@reduxjs/toolkit'

import { handlerPending, handlerRejected, handlerFulfilled } from "./handlers";

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        isLoading: false, 
        error: "",
    },
    extraReducers: builder => {
        builder
        .addMatcher((action) => action.type.endsWith("/pending"), handlerPending)
        .addMatcher((action) => action.type.endsWith("/rejected"), handlerRejected)
        .addMatcher((action)=> action.type.endsWith("/fulfilled"),handlerFulfilled)
    }
})

export const rootReducer = rootSlice.reducer;