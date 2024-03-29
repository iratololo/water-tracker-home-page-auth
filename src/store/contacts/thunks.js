import { createAsyncThunk } from "@reduxjs/toolkit";

import { createContactsApi, getContactsApi, removeContactsApi, updateContacApi } from "api/contacts";


export const getContactsThunk = createAsyncThunk('contacts/getContacts', async (_, { rejectWithValue, getState }) => {
    const token = getState().auth.token;
    try {
        const { data } = await getContactsApi(token);
    return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


export const addContactsThunk = createAsyncThunk('contacts/addContact', async (body, { rejectWithValue, getState }) => {
    const token = getState().auth.token;
    try {
        const { data } = await createContactsApi({ token, body });
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
  
})

export const removeContactsThunk = createAsyncThunk('contacts/removeContact', async (id, { rejectWithValue, getState }) => {
    const token = getState().auth.token;
    try {
    const { data } = await removeContactsApi({id, token});
    return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
  
})

export const updateContactsThunk = createAsyncThunk('contacts/updateContact', async (_, { rejectWithValue, getState }) => {
    const body = getState().contacts.contacts.profile;
    const token = getState().auth.token;
    try {
        const { data } = await updateContacApi({ body, token });
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
  
})