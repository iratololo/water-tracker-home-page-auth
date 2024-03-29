import { createSlice } from '@reduxjs/toolkit'

import { loginThunk, logoutThunk, refreshThunk, signUpThunk } from "./thunks";
import { handleSignUp, handleRefresh, handleLogout }  from "./handlers";


const initialState = {
    token: "",
    profile: null, 
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(signUpThunk.fulfilled, handleSignUp)
        .addCase(loginThunk.fulfilled, handleSignUp)
        .addCase(refreshThunk.fulfilled, handleRefresh)
            .addCase(refreshThunk.rejected, (state) => {
                state.token = ""
                state.profile = null
            })
        .addCase(logoutThunk.fulfilled, handleLogout)
    }
})


export const authReducer = authSlice.reducer;