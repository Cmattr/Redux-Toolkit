import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { store } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import NavigationBar from './Components/NavBar';
import ExerciseForm from './Components/exercises';
import Homepage from './Components/home';

function App() {
  return (
    <Provider store={store}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/exercise" element={<ExerciseForm />} />
        </Routes>
    </Provider>
  );
}

export default App;
