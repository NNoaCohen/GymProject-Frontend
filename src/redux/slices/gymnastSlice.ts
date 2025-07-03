import { createSlice } from '@reduxjs/toolkit';
import { Gymnast } from '../../models/Gymnast';

interface GymnastState {
  data: Gymnast | null;
  loading: boolean;
  error: string | null;
}

const initialState: GymnastState = {
  data: null,
  loading: false,
  error: null,
};

const gymnastSlice = createSlice({
  name: 'gymnast',
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
    },
    fetchFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
      createStart(state) {
      state.loading = true;
      state.error = null;
    },
    createSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    createFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});


export const {
  fetchStart,
  fetchSuccess,
  fetchFailure,
  createStart,
  createSuccess,
  createFailure,
} = gymnastSlice.actions;
export default gymnastSlice.reducer;
