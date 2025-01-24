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

  return (
    <form>
      <label>
        Task:
        <input type="text" value={task} />
      </label>

      <label>
        Priority:
        <select value={priority}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>

      <button>Add Task</button>
    </form>
  )
}
