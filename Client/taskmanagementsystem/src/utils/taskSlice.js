import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  reducers: {
    fetchTasksStart: (state) => { state.loading = true; },
    fetchTasksSuccess: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    fetchTasksFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    addTask: (state, action) => {
      state.list.push(action.payload);
    },
    updateTask: (state, action) => {
      const index = state.list.findIndex(task => task._id === action.payload._id);
      if (index !== -1) state.list[index] = action.payload;
    },
    deleteTask: (state, action) => {
      state.list = state.list.filter(task => task._id !== action.payload);
    }
  }
});

export const {
  fetchTasksStart,
  fetchTasksSuccess,
  fetchTasksFailure,
  addTask,
  updateTask,
  deleteTask
} = taskSlice.actions;
export default taskSlice.reducer;