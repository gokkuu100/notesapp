import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Form from './Form';
import Task from './Task';
import SearchForm from './SearchForm';

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

  function handleRemoveTask(id) {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setTaskArray(taskArray.filter((task) => task.id !== id));
      })
      .catch((error) => console.error('Error removing task:', error));
  }

  function handleSearching(search){
    setTaskArray((taskArray) =>
    taskArray.filter((item)=>item.task.includes(search)))
  }

  return (
    <>
    <SearchForm onSearching={handleSearching}/>
    <Header />
    <Form onNewTask={handleNewTask}/>
    <Task todo={taskArray} onRemoveTask={handleRemoveTask} />
    </>
  );
}

export default App;
