import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    exercises: {},
    totalItems: 0,
};

export const exerciseSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers: {
        addExercise: (state, action) => {
            const { id } = action.payload;
            if (state.exercises[id]) {
                state.exercises[id] += 1;
            } else {
                state.exercises[id] = 1;
            }
            state.totalItems += 1;
        },
        removeExercise: (state, action) => {
            const { id } = action.payload;
            if (state.exercises[id]) {
                state.exercises[id] -= 1;
                if (state.exercises[id] === 0) {
                    delete state.exercises[id];
                }
                state.totalItems -= 1;
            }
        },
    },
});

export const { addExercise, removeExercise } = exerciseSlice.actions;

export default exerciseSlice.reducer;