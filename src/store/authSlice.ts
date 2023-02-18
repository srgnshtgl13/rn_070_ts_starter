import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from '@reduxjs/toolkit';
import {GlobalApiConfig} from '@config/api.config';
import {RegisterRequest, LoginRequest, IAuthPayloadAction} from '@global/types';

// action types
const TYPE_REGISTER = 'TYPE_REGISTER';
const TYPE_LOGIN = 'TYPE_LOGIN';

interface InitialState {
  pending: boolean;
  error: string | undefined | null;
  token: string | undefined | null;
}

const initialState: InitialState = {
  pending: false,
  error: null,
  token: null,
};

export const register = createAsyncThunk(
  TYPE_REGISTER,
  async (formBody: RegisterRequest, thnukApi) => {
    try {
      const {data} = await GlobalApiConfig.post('auth/register', formBody);
      return {token: data.token};
    } catch (error: any) {
      return thnukApi.rejectWithValue(
        error?.response?.data?.message || 'Server error',
      );
    }
  },
);

export const login = createAsyncThunk(
  TYPE_LOGIN,
  async (formBody: LoginRequest, thnukApi) => {
    try {
      const {data} = await GlobalApiConfig.post('auth/authenticate', formBody);
      return {token: data.token};
    } catch (error: any) {
      return thnukApi.rejectWithValue(
        error?.response?.data?.message || 'Server error',
      );
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // omit case reducers
    logout(state) {
      state.error = null;
      state.pending = false;
      state.token = null;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.pending = true;
      })
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<IAuthPayloadAction>) => {
          state.pending = false;
          state.error = null;
          state.token = action.payload.token;
          // console.log(`${action.type}: `, action.payload);
        },
      )
      .addCase(register.rejected, (state, action: PayloadAction<any>) => {
        state.pending = false;
        state.error = action.payload;
        state.token = null;
        console.log(`${action.type}: `, action.payload);
      })
      .addCase(login.pending, state => {
        state.pending = true;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<IAuthPayloadAction>) => {
          state.pending = false;
          state.error = null;
          state.token = action.payload.token;
          // console.log(`${action.type}: `, action.payload);
        },
      )
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.pending = false;
        state.error = action.payload;
        state.token = null;
        console.log(`${action.type}: `, action.payload);
      });
  },
});

export const {logout, setError} = authSlice.actions;
export const authReducer = authSlice.reducer;
