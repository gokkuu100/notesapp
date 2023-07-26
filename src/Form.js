import React, { useState } from 'react'
import './App.css';

function Form({onNewTask}) {
    const [taskInput, setTaskInput] = useState("")
    function handleInput(e) {
        setTaskInput(e.target.value)
        //console.log(taskInput);
    }

    function handleFormSubmit(e) {
      e.preventDefault(); 
      onNewTask({task: taskInput });
      setTaskInput('');
    }
  return (
    <div>
      <form onSubmit={handleFormSubmit} className='text-center'>
        <input 
        className='p-4 w-[50%]'
        placeholder='enter task here'
        value={taskInput}
        onChange={handleInput}
        ></input>
        <button type='submit' className='p-[1rem] bg-red-700 text-white'>Add task</button>
      </form>
    </div>
  )
}

export default Form