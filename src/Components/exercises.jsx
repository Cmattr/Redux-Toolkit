import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { addExercise } from '../features/exercises/ExercisesSlice';

const ExerciseForm = () => {
  const dispatch = useDispatch();
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseCount, setExerciseCount] = useState(1);

  const handleAddExercise = (e) => {
    e.preventDefault();
    const id = uuidv4(); // Generate a unique ID for the exercise
    dispatch(addExercise({ id, name: exerciseName, count: exerciseCount })); // Dispatch with id, name, and count
    setExerciseName('');
    setExerciseCount(1); // Reset count to 1
  };

  return (
    <Container className="vh-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col md={5}>
          <Form onSubmit={handleAddExercise}>
            <Form.Group className="mb-3">
              <Form.Label>Exercise</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter exercise'
                value={exerciseName}
                onChange={(e) => setExerciseName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Exercise Count</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter count'
                value={exerciseCount}
                onChange={(e) => setExerciseCount(Number(e.target.value))}
                min={1}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Add Exercise
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ExerciseForm;
