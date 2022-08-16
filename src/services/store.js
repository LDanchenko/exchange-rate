import {
  createSlice,
  createAsyncThunk,
  configureStore,
} from '@reduxjs/toolkit';

import {
  fetchExchangeRateEUR,
  fetchExchangeRateUAH,
  fetchExchangeRateUSD,
} from './bank-api';

const initialState = {
  exchange: [],
  loading: false,
};

export const getExchangeRate = createAsyncThunk(
  'rate/getExchangeRate',
  async (thunkAPI, { rejectWithValue }) => {
    try {
      const usdCourse = await fetchExchangeRateUSD();
      const eurCourse = await fetchExchangeRateEUR();
      const uaCourse = await fetchExchangeRateUAH();
      const response = {
        ...usdCourse.data.quotes,
        ...eurCourse.data.quotes,
        ...uaCourse.data.quotes,
      };
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const postSlice = createSlice({
  name: 'rate',
  initialState,
  reducers: {},
  extraReducers: {
    [getExchangeRate.pending]: state => {
      state.loading = true;
    },
    [getExchangeRate.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.exchange = payload;
    },
    [getExchangeRate.rejected]: (state, action) => {
      state.loading = false;
      console.log('reje'); // toast
    },
  },
});

export const store = configureStore({
  reducer: postSlice.reducer,
});
