import {combineReducers} from '@reduxjs/toolkit';

// redux reducers(old way or slice)
import {authReducer} from './authSlice';

// rtk query reducers
import {api} from '@services/api';

export default combineReducers({
  auth: authReducer,
  [api.reducerPath]: api.reducer,
});
