import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contact';
import { filterReduser } from './filter';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: 'filter',
};

const rootReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
});

const persistedContactsReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedContactsReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
