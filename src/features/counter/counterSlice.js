import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
  value: 0,
  userName: "Eylon",
};

// async
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);
// from reducers is sync
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state,action) => {
      console.log(action.payload);
      
    state.value += action.payload.n 
    },
    increment3: (state) => {
      state.value += 3;
    },
    sub2: (state) => {
      state.value -= 2;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
        state.value += action.payload;
      });
  },
});

export const { increment,increment3,sub2 } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export const selectUserName = (state) => state.counter.userName;
export default counterSlice.reducer;