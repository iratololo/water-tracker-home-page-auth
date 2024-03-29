import {api} from "./api"

export const registrationApi = async (body) => {
    const response = await api.post('/users/signup', body);
    return response;
}

export const authorizationApi = async (body) => {
    const response = await api.post('/users/login', body);
    return response;
}

export const refreshApi = async (token) => {
    const response = await api.get('/users/current', {
        headers: {
        Authorization: `Bearer ${token}`,
    }});
    return response;
}

export const logoutApi = async (token) => {
    const response = await api.post('/users/logout', {}, {
        headers: {
        Authorization: `Bearer ${token}`,
    }});
    return response;
}