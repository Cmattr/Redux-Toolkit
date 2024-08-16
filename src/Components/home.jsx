import React from 'react';
import { useSelector } from 'react-redux';

const Homepage = () => {
  const exercisesState = useSelector((state) => state.exercises); // Access the exercises state
  const exercises = Object.entries(exercisesState.exercises); // Convert the object to an array

  return (
    <div>
      <h2>Exercise List</h2>
      {exercises.length > 0 ? (
        exercises.map(([id, { name, count }]) => (
          <div key={id}>
            <p>Exercise name: {name}, Count: {count}</p>
          </div>
        ))
      ) : (
        <p>No exercises available.</p>
      )}
    </div>
  );
};

export default Homepage;
