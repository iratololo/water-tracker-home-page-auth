import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { contactsReducer } from "./contacts/sliceContacts";
import { filterReducer } from "./filter/sliceFilter";
import { authReducer } from "./auth/slice";
import { rootReducer } from "./root/slice";

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

const persistedReducer = persistReducer(persistConfig, authReducer)

const reducer = {
    filter: filterReducer,
    contacts: contactsReducer,
    auth: persistedReducer,
    root: rootReducer,
}

export const store = configureStore({ reducer, middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
    
export const persistor = persistStore(store)