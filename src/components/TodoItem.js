import React from 'react';

function TodoItem({ task, deleteTask, toggleCompleted }) {
  return (
    <div className="todo-item">
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleCompleted(task.id)} 
      />
      <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </p>
      <small>{task.date} at {task.time}</small>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}

export default TodoItem;
