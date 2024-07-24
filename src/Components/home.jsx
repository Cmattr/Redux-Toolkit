import React from 'react';
import { useSelector } from 'react-redux';
import { exerciseSlice } from '../features/exercises/ExercisesSlice';

const Homepage = () => {
  const exercises = useSelector((state) => state.workouts.exercises);

  return (
    <div>
      <h2>Exercise List</h2>
      {exercises.map((exercise) => (
        <exerciseSlice key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
};

export default Homepage;