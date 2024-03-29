export const handleSignUp =(state, {payload}) => {
            state.token = payload.token
            state.profile = payload.user
}

export const handleRefresh =(state, {payload}) => {
            state.profile = payload
}

export const handleLogout =(state) => {
    state.profile = null
    state.token = ''
}
