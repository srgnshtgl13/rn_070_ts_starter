import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '@services/api';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// gDM: getDefaultMiddleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: gDM =>
    gDM({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(api.middleware),
});

/**
 * A utility used to enable refetchOnFocus and refetchOnReconnect behaviors. It requires
 * the dispatch method from your store. Calling setupListeners(store.dispatch) will configure
 * listeners with the recommended defaults, but you have the option of providing a callback
 * for more granular control.
 * check out for more: https://redux-toolkit.js.org/rtk-query/api/setupListeners
 */
setupListeners(store.dispatch);

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {auth: AuthState, ....}
export type AppDispatch = typeof store.dispatch;
