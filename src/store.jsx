import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from './features/exercises/ExercisesSlice'

export const store = configureStore({
    reducer: {
        exercises: exerciseReducer,
    },
});