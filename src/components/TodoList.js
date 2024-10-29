import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const addTask = () => {
    if (!text.trim()) return; 
    const newTask = { 
      id: Date.now(), 
      text, 
      completed: false,
      date: selectedDate.toDateString(),
      time: selectedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setTasks([...tasks, newTask]);
    setText('');
  };

  const toggleCompleted = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="todo-list">
      <Calendar onChange={setSelectedDate} value={selectedDate} />
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={() => deleteTask(task.id)}
          toggleCompleted={() => toggleCompleted(task.id)}
        />
      ))}
    </div>
  );
}

export default TodoList;
