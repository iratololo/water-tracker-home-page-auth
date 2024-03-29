export const handlerPending = (state) => {
    state.isLoading = true
    state.error = ""
}

export const handlerRejected = (state, {payload,error}) => {
    state.isLoading = false
    state.error=payload?.message||payload||error?.message||'some error'
}

export const handlerFulfilled = (state) => {
    state.isLoading = false
}