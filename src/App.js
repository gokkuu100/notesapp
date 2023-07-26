import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Form from './Form';
import Task from './Task';

function App() {
  const [taskArray, setTaskArray] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  function fetchTasks() {
    fetch('http://localhost:3000/tasks')
      .then((response) => response.json())
      .then((data) => setTaskArray(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }

  function handleNewTask(newTask) {
    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((data) => {
        setTaskArray([...taskArray, data]);
      })
      .catch((error) => console.error('Error adding task:', error));
  }

  return (
    <>
    <Header className="bg-purple-500" />
    <Form onNewTask={handleNewTask}/>
    <Task todo={taskArray} />
    </>
  );
}

export default App;
