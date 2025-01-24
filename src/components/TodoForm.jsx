import { useState } from 'react'

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
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input type="text" value={task} onChange={handleTask} />
      </label>

      <label>
        Priority:
        <select value={priority} onChange={handlePriority}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>

      <button>Add Task</button>
    </form>
  )
}
