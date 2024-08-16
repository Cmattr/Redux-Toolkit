import { createSlice } from '@reduxjs/toolkit';

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: {
    exercises: {}
  },
  reducers: {
    addExercise: (state, action) => {
      const { id, name, count } = action.payload;
      state.exercises[id] = { name, count }; 
    },
    addCount: (state, action) => {
      const { id, count } = action.payload;
      if (state.exercises[id]) {
        state.exercises[id].count += count; 
      }
    },
  }
});

export const { addExercise, addCount } = exercisesSlice.actions;
export default exercisesSlice.reducer;