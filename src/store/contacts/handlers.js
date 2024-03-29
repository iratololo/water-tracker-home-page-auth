export const handleGetContacts =(state, {payload}) => {
            state.contacts.items=payload
}

export const handleAddContacts =(state, {payload}) => {
             state.contacts.items.push(payload)
}

export const handleRemoveContacts =(state, { payload }) => {
    state.contacts.items = state.contacts.items.filter(({ id }) => id !== payload.id)
    state.contacts.profile.name = ""
    state.contacts.profile.number = ""
    state.contacts.profile.id = ""
}

export const handleUpdateContact = (state, { payload }) => {
    state.contacts.items = state.contacts.items.map((item) => {
        if (item.id === payload.id) {
            item = payload;
        }
        return item;
        })
}
