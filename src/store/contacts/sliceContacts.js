import { createSlice } from '@reduxjs/toolkit'

import { getContactsThunk, addContactsThunk, removeContactsThunk, updateContactsThunk } from './thunks'
import { handleAddContacts, handleGetContacts, handleRemoveContacts, handleUpdateContact } from './handlers'


const initialState = {
    contacts: {
        items: [],
        profile: {
            name: "",
            number: "",
            id: ""
        },
    },
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
         changeProfile: (state, { payload }) => {
           state.contacts.profile=payload
        },
        changeProfileName: (state, { payload }) => {
           state.contacts.profile.name=payload
        },
        changeProfileNumber: (state, { payload }) => {
           state.contacts.profile.number=payload
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getContactsThunk.fulfilled, handleGetContacts)
        .addCase(addContactsThunk.fulfilled, handleAddContacts)
        .addCase(removeContactsThunk.fulfilled, handleRemoveContacts)
        .addCase(updateContactsThunk.fulfilled, handleUpdateContact)
    }
    
})

export const contactsReducer = contactsSlice.reducer;
export const {changeProfileName,changeProfileNumber, changeProfile} = contactsSlice.actions;