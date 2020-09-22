import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import { createTask, deleteTask } from './actions/taskActions';

// TODO: Import the application's Redux store instance
// TODO: Import the `createTask` and `deleteTask` action creator functions

// TODO: Set the `store` to the window
// TODO: Set the `createTask` function to the window
// TODO: Set the `deleteTask` function to the window

window.store = store;
window.createTask = createTask;
window.deleteTask = deleteTask;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
