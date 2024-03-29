import { api } from "./api"

export const getContactsApi = async (token) => {
    const response = await api.get('/contacts', {
        headers: {
        Authorization: `Bearer ${token}`,
    }});
    return response;
}

export const createContactsApi = async ({ token, body }) => {
    const response = await api.post('/contacts',body, {
        headers: {
        Authorization: `Bearer ${token}`,
    }});
    return response;
}

export const removeContactsApi = async ({ token, id }) => {
    const response = await api.delete(`/contacts/${id}`, {
        headers: {
        Authorization: `Bearer ${token}`,
    }});
    return response;
}

export const updateContacApi = async ({ token, body:{id,name,number} }) => {
    const response = await api.patch(`/contacts/${id}`,{name,number}, {
        headers: {
        Authorization: `Bearer ${token}`,
    }});
    return response;
}