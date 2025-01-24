import { useState } from 'react'

import '../css/TodoForm.css'

const TodoForm = ({ onAddTask }) => {
  const [task, setTask] = useState('')
  const [priority, setPriority] = useState('low')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!task.trim()) return

    onAddTask({ task, priority })
    setTask('')
    setPriority('low')
  }

  const handleTask = (e) => {
    const value = e.target.value
    setTask(value)
  }

  const handlePriority = (e) => {
    const value = e.target.value
    setPriority(value)
  }

  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <label>
        Task:
        <input
          type="text"
          value={task}
          onChange={handleTask}
          className="input-todoForm"
          placeholder="Write a task..."
          required
        />
      </label>

      <label>
        Priority:
        <select
          value={priority}
          onChange={handlePriority}
          className="select-todoForm"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>

      <button className="button-todoForm">Add Task</button>
    </form>
  )
}

export default TodoForm
