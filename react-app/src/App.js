import React from 'react';
import './App.css'
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="todo-app">
      <ToDoList />  
    </div>
  );
}

export default App;
