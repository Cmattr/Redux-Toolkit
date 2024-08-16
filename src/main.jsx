import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the import change
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

// Create a root element and use createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);