import React, { useState, useEffect, useRef } from 'react';
import './Todo.css'; // Import the CSS file
import taskAddedSound from '../assets/audio.mp3'; // Import the audio file

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const audioRef = useRef(null);

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const addTask = () => {
    if (taskInput.trim() !== '') {
      const updatedTasks = [...tasks, taskInput];
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setTaskInput('');

      // Play the audio when a task is added
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleKeyPress = (e) => {
    // Check if the pressed key is Enter (key code 13)
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="todo-container">
      <h2>Todolist</h2>
      <div className="input-container">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyPress={handleKeyPress} // Call handleKeyPress on key press
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <audio ref={audioRef}>
        <source src={taskAddedSound} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
