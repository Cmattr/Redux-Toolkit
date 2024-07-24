import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { store } from './store';
import 'bootstrap/dist/css/bootstrap.min.css'; // Corrected typo here
import { Provider } from 'react-redux';
import NavigationBar from './Components/NavBar';
import ExerciseForm from './Components/exercises';
import Homepage from './Components/home';



function App() {
  

  return (
    // <UserContext.Provider value={{ user, setUser }}>
    <Provider store={store}>
      <NavigationBar/>
      <Router>
        <Routes>
          {/* Define routes with correct path and element */}
          <Route path="/" element={<Homepage />} />
          <Route path="/exercise" element={<ExerciseForm />} />
        </Routes>
      </Router>
    </Provider>  
    // </UserContext.Provider>
  );
}

export default App;